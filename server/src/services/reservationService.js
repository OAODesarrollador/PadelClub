import { prisma, rawLibsql } from '../db/prisma.js';
import { addMinutes, overlaps } from '../lib/time.js';
import { hashManageToken, randomManageToken, timingSafeEqualHash } from '../lib/token.js';
import { env } from '../config/env.js';
import { calculatePrice } from './pricingService.js';
import { ReservationStatus, CreatedByKind } from '@prisma/client';
import { getActiveRangesForDate, isInsideActiveRanges } from '../lib/schedule.js';
import crypto from 'crypto';

async function resolveClubRef(clubRef) {
  try {
    const club = await prisma.club.findFirst({
      where: {
        OR: [{ id: clubRef }, { slug: clubRef }],
        active: true
      }
    });
    if (!club) throw new Error('CLUB_NOT_FOUND');
    return club;
  } catch (err) {
    if (err.message === 'CLUB_NOT_FOUND') throw err;
    console.warn(`[RESERVATION_FALLBACK] resolveClubRef Prisma failed: ${err.message}. Using raw SQL.`);
    const rs = await rawLibsql.execute({
      sql: 'SELECT * FROM Club WHERE (id = ? OR slug = ?) AND active = 1 LIMIT 1',
      args: [clubRef, clubRef]
    });
    const club = rs.rows[0];
    if (!club) throw new Error('CLUB_NOT_FOUND');
    return club;
  }
}

async function findAvailableCourt({ clubId, startAt, endAt }) {
  let courts;
  try {
    courts = await prisma.court.findMany({ where: { clubId, active: true }, orderBy: { name: 'asc' } });
  } catch (err) {
    console.warn(`[RESERVATION_FALLBACK] findAvailableCourt Prisma failed: ${err.message}. Using raw SQL.`);
    const rs = await rawLibsql.execute({
      sql: 'SELECT * FROM Court WHERE clubId = ? AND active = 1 ORDER BY name ASC',
      args: [clubId]
    });
    courts = rs.rows;
  }

  for (const court of courts) {
    const hasConflict = await hasOverlap({ clubId, courtId: court.id, startAt, endAt });
    if (!hasConflict) return court;
  }
  return null;
}

async function assertInsideClubActiveRange(clubId, startAt, endAt) {
  let club;
  try {
    club = await prisma.club.findUnique({ where: { id: clubId } });
  } catch (err) {
    console.warn(`[RESERVATION_FALLBACK] assertInsideRange Prisma failed: ${err.message}. Using raw SQL.`);
    const rs = await rawLibsql.execute({
      sql: 'SELECT * FROM Club WHERE id = ? LIMIT 1',
      args: [clubId]
    });
    club = rs.rows[0];
  }

  if (!club) throw new Error('CLUB_NOT_FOUND');

  const dateKey = startAt.toISOString().slice(0, 10);
  const activeRanges = getActiveRangesForDate(club.scheduleJson, dateKey);
  const ok = isInsideActiveRanges(activeRanges, startAt, endAt);
  if (!ok) throw new Error('OUTSIDE_ACTIVE_HOURS');
}

export async function hasOverlap({ clubId, courtId, startAt, endAt, ignoreReservationId }) {
  const now = new Date();
  let reservations, blocks;

  try {
    reservations = await prisma.reservation.findMany({
      where: {
        clubId,
        courtId,
        id: ignoreReservationId ? { not: ignoreReservationId } : undefined,
        OR: [
          { status: ReservationStatus.CONFIRMED },
          { status: ReservationStatus.HOLD, holdExpiresAt: { gt: now } }
        ]
      }
    });
    blocks = await prisma.block.findMany({ where: { clubId, courtId } });
  } catch (err) {
    console.warn(`[RESERVATION_FALLBACK] hasOverlap Prisma failed: ${err.message}. Using raw SQL.`);
    const rsRes = await rawLibsql.execute({
      sql: `SELECT * FROM Reservation 
            WHERE clubId = ? AND courtId = ? 
            AND id != ?
            AND (status = "CONFIRMED" OR (status = "HOLD" AND holdExpiresAt > ?))`,
      args: [clubId, courtId, ignoreReservationId || '', now.toISOString()]
    });
    const rsBlocks = await rawLibsql.execute({
      sql: 'SELECT * FROM Block WHERE clubId = ? AND courtId = ?',
      args: [clubId, courtId]
    });
    reservations = rsRes.rows.map(r => ({ ...r, startAt: new Date(r.startAt), endAt: new Date(r.endAt) }));
    blocks = rsBlocks.rows.map(b => ({ ...b, startAt: new Date(b.startAt), endAt: new Date(b.endAt) }));
  }

  return (
    reservations.some((r) => overlaps(startAt, endAt, r.startAt, r.endAt)) ||
    blocks.some((b) => overlaps(startAt, endAt, b.startAt, b.endAt))
  );
}

export async function createHold(input) {
  const club = await resolveClubRef(input.clubId);
  const normalizedClubId = club.id;

  const startAt = new Date(input.startAt);
  const endAt = addMinutes(startAt, input.durationMinutes);

  await assertInsideClubActiveRange(normalizedClubId, startAt, endAt);

  try {
    return await prisma.$transaction(async (tx) => {
      let courtId = input.courtId;
      if (!courtId) {
        const court = await findAvailableCourt({ clubId: normalizedClubId, startAt, endAt });
        if (!court) throw new Error('NO_AVAILABLE_COURT');
        courtId = court.id;
      }

      const conflict = await hasOverlap({ clubId: normalizedClubId, courtId, startAt, endAt });
      if (conflict) throw new Error('SLOT_CONFLICT');

      const token = randomManageToken();
      const amount = await calculatePrice({ clubId: normalizedClubId, courtId, startAt, durationMinutes: input.durationMinutes });

      const reservation = await tx.reservation.create({
        data: {
          clubId: normalizedClubId,
          courtId,
          status: ReservationStatus.HOLD,
          startAt,
          endAt,
          holdExpiresAt: addMinutes(new Date(), env.holdMinutes),
          customerName: input.customerName,
          customerWhatsapp: input.customerWhatsapp,
          customerEmail: input.customerEmail || null,
          note: input.note || null,
          manageTokenHash: hashManageToken(token),
          manageTokenLastRotatedAt: new Date(),
          createdByKind: CreatedByKind.PUBLIC,
          amount
        }
      });

      return { reservation, manageToken: token };
    });
  } catch (err) {
    if (['NO_AVAILABLE_COURT', 'SLOT_CONFLICT', 'OUTSIDE_ACTIVE_HOURS', 'CLUB_NOT_FOUND'].includes(err.message)) throw err;
    console.warn(`[RESERVATION_FALLBACK] createHold Prisma failed: ${err.message}. Using raw SQL.`);

    let courtId = input.courtId;
    if (!courtId) {
      const court = await findAvailableCourt({ clubId: normalizedClubId, startAt, endAt });
      if (!court) throw new Error('NO_AVAILABLE_COURT');
      courtId = court.id;
    }

    const conflict = await hasOverlap({ clubId: normalizedClubId, courtId, startAt, endAt });
    if (conflict) throw new Error('SLOT_CONFLICT');

    const token = randomManageToken();
    const amount = await calculatePrice({ clubId: normalizedClubId, courtId, startAt, durationMinutes: input.durationMinutes });
    const id = crypto.randomUUID();
    const holdExpiresAt = addMinutes(new Date(), env.holdMinutes);
    const now = new Date();

    await rawLibsql.execute({
      sql: `INSERT INTO Reservation (
        id, clubId, courtId, status, startAt, endAt, holdExpiresAt, 
        customerName, customerWhatsapp, customerEmail, note, 
        manageTokenHash, manageTokenLastRotatedAt, createdByKind, amount, createdAt, updatedAt
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      args: [
        id, normalizedClubId, courtId, 'HOLD', startAt.toISOString(), endAt.toISOString(), holdExpiresAt.toISOString(),
        input.customerName, input.customerWhatsapp, input.customerEmail || null, input.note || null,
        hashManageToken(token), now.toISOString(), 'PUBLIC', amount, now.toISOString(), now.toISOString()
      ]
    });

    const reservation = {
      id, clubId: normalizedClubId, courtId, status: 'HOLD', startAt, endAt, holdExpiresAt,
      customerName: input.customerName, customerWhatsapp: input.customerWhatsapp, customerEmail: input.customerEmail || null, note: input.note || null,
      amount
    };

    return { reservation, manageToken: token };
  }
}

export async function confirmReservation(reservationId) {
  const now = new Date();
  let reservation;
  try {
    reservation = await prisma.reservation.findUnique({ where: { id: reservationId } });
    if (!reservation) throw new Error('NOT_FOUND');
    if (reservation.status !== ReservationStatus.HOLD) throw new Error('INVALID_STATE');
    if (!reservation.holdExpiresAt || reservation.holdExpiresAt <= now) throw new Error('HOLD_EXPIRED');

    return await prisma.reservation.update({
      where: { id: reservationId },
      data: { status: ReservationStatus.CONFIRMED, holdExpiresAt: null }
    });
  } catch (err) {
    if (['NOT_FOUND', 'INVALID_STATE', 'HOLD_EXPIRED'].includes(err.message)) throw err;
    console.warn(`[RESERVATION_FALLBACK] confirmReservation Prisma failed: ${err.message}. Using raw SQL.`);

    const rs = await rawLibsql.execute({
      sql: 'SELECT * FROM Reservation WHERE id = ? LIMIT 1',
      args: [reservationId]
    });
    reservation = rs.rows[0];
    if (!reservation) throw new Error('NOT_FOUND');
    if (reservation.status !== 'HOLD') throw new Error('INVALID_STATE');
    const holdExpiresAt = new Date(reservation.holdExpiresAt);
    if (isNaN(holdExpiresAt.getTime()) || holdExpiresAt <= now) throw new Error('HOLD_EXPIRED');

    await rawLibsql.execute({
      sql: 'UPDATE Reservation SET status = "CONFIRMED", holdExpiresAt = NULL, updatedAt = ? WHERE id = ?',
      args: [now.toISOString(), reservationId]
    });

    return { ...reservation, status: 'CONFIRMED', holdExpiresAt: null };
  }
}

export async function resolveManageToken(token) {
  const hash = hashManageToken(token);
  let candidates;
  try {
    candidates = await prisma.reservation.findMany({
      where: { status: { in: [ReservationStatus.HOLD, ReservationStatus.CONFIRMED] } }
    });
  } catch (err) {
    console.warn(`[RESERVATION_FALLBACK] resolveManageToken Prisma failed: ${err.message}. Using raw SQL.`);
    const rs = await rawLibsql.execute({
      sql: 'SELECT * FROM Reservation WHERE status IN ("HOLD", "CONFIRMED")'
    });
    candidates = rs.rows;
  }

  const match = candidates.find((c) => timingSafeEqualHash(c.manageTokenHash, hash));
  return match || null;
}

export async function cancelByManageToken({ token, reason }) {
  const reservation = await resolveManageToken(token);
  if (!reservation) throw new Error('NOT_FOUND');
  if (reservation.status === ReservationStatus.CANCELED) throw new Error('ALREADY_CANCELED');

  return prisma.reservation.update({
    where: { id: reservation.id },
    data: { status: ReservationStatus.CANCELED, canceledAt: new Date(), canceledReason: reason || 'Cancelado por cliente' }
  });
}

export async function rescheduleByManageToken({ token, startAt, durationMinutes, courtId }) {
  const reservation = await resolveManageToken(token);
  if (!reservation) throw new Error('NOT_FOUND');

  const newStart = new Date(startAt);
  const newEnd = addMinutes(newStart, durationMinutes);
  const targetCourtId = courtId || reservation.courtId;

  await assertInsideClubActiveRange(reservation.clubId, newStart, newEnd);

  const conflict = await hasOverlap({
    clubId: reservation.clubId,
    courtId: targetCourtId,
    startAt: newStart,
    endAt: newEnd,
    ignoreReservationId: reservation.id
  });
  if (conflict) throw new Error('SLOT_CONFLICT');

  const nextToken = randomManageToken();

  const updated = await prisma.reservation.update({
    where: { id: reservation.id },
    data: {
      status: ReservationStatus.HOLD,
      startAt: newStart,
      endAt: newEnd,
      courtId: targetCourtId,
      holdExpiresAt: addMinutes(new Date(), env.holdMinutes),
      manageTokenHash: hashManageToken(nextToken),
      manageTokenLastRotatedAt: new Date()
    }
  });

  return { updated, nextToken };
}

export async function cleanupExpiredHolds() {
  const result = await prisma.reservation.updateMany({
    where: { status: ReservationStatus.HOLD, holdExpiresAt: { lte: new Date() } },
    data: { status: ReservationStatus.CANCELED, canceledReason: 'HOLD expirado', canceledAt: new Date() }
  });
  return result.count;
}

export async function getDayAgenda(date) {
  const start = new Date(date);
  start.setHours(0, 0, 0, 0);
  const end = new Date(start);
  end.setDate(end.getDate() + 1);

  return prisma.reservation.findMany({
    where: {
      startAt: { gte: start, lt: end }
    },
    include: { court: true, club: true },
    orderBy: { startAt: 'asc' }
  });
}

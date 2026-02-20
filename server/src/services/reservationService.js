import { db } from '../db/db.js';
import crypto from 'crypto';
import { calculatePrice } from './pricingService.js';

export async function createHold({ clubId, courtId, startAt, durationMinutes, userName, userPhone }) {
  const club = await db.queryFirst('SELECT * FROM Club WHERE id = ? OR slug = ?', [clubId, clubId]);
  if (!club) throw new Error('Club no encontrado');

  const realClubId = club.id;
  const startDate = new Date(startAt);
  const endDate = new Date(startDate.getTime() + durationMinutes * 60 * 1000);

  // Check overlaps
  const overlap = await db.queryFirst(
    `SELECT id FROM Reservation 
     WHERE courtId = ? AND status != 'CANCELED' 
     AND ((startAt < ? AND endAt > ?) OR (startAt < ? AND endAt > ?))`,
    [courtId, endDate.toISOString(), startDate.toISOString(), endDate.toISOString(), startDate.toISOString()]
  );

  if (overlap) throw new Error('El horario ya está ocupado');

  const price = await calculatePrice({ courtId, startAt, durationMinutes });
  const reservationId = crypto.randomUUID();
  const manageToken = crypto.randomBytes(32).toString('hex');

  await db.execute(
    `INSERT INTO Reservation (id, clubId, courtId, startAt, endAt, userName, userPhone, totalPrice, status, manageToken, createdAt, updatedAt) 
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      reservationId,
      realClubId,
      courtId,
      startDate.toISOString(),
      endDate.toISOString(),
      userName,
      userPhone,
      price,
      'HOLD',
      manageToken,
      new Date().toISOString(),
      new Date().toISOString()
    ]
  );

  return { id: reservationId, manageToken, totalPrice: price };
}

export async function confirmReservation({ reservationId, paymentMethod, paymentId }) {
  return await db.transaction(async (tx) => {
    const res = await tx.execute({
      sql: "SELECT * FROM Reservation WHERE id = ? AND status = 'HOLD'",
      args: [reservationId]
    });
    const reservation = res.rows[0];
    if (!reservation) throw new Error('Reserva no encontrada o ya confirmada');

    await tx.execute({
      sql: "UPDATE Reservation SET status = 'CONFIRMED', updatedAt = ? WHERE id = ?",
      args: [new Date().toISOString(), reservationId]
    });

    const paymentUuid = crypto.randomUUID();
    await tx.execute({
      sql: `INSERT INTO Payment (id, reservationId, amount, method, status, externalId, createdAt, updatedAt) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      args: [
        paymentUuid,
        reservationId,
        reservation.totalPrice,
        paymentMethod,
        'COMPLETED',
        paymentId || null,
        new Date().toISOString(),
        new Date().toISOString()
      ]
    });

    return { success: true };
  });
}

export async function resolveManageToken(token) {
  return await db.queryFirst('SELECT * FROM Reservation WHERE manageToken = ?', [token]);
}

export async function cancelByManageToken(token) {
  const reservation = await resolveManageToken(token);
  if (!reservation) throw new Error('Token inválido');

  await db.execute(
    "UPDATE Reservation SET status = 'CANCELED', updatedAt = ? WHERE id = ?",
    [new Date().toISOString(), reservation.id]
  );
  return { success: true };
}

export async function getReservationsForPublic(clubId, date) {
  const start = `${date}T00:00:00.000Z`;
  const end = `${date}T23:59:59.999Z`;

  return await db.query(
    "SELECT * FROM Reservation WHERE clubId = ? AND startAt >= ? AND startAt <= ? AND status != 'CANCELED'",
    [clubId, start, end]
  );
}

export async function getBlocksForPublic(clubId) {
  return await db.query('SELECT * FROM Block WHERE clubId = ?', [clubId]);
}

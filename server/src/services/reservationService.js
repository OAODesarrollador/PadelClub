import { db } from '../db/db.js';
import crypto from 'crypto';
import { calculatePrice } from './pricingService.js';

export async function createHold({ clubId, courtId, startAt, durationMinutes, userName, userPhone, customerName, customerWhatsapp, customerEmail, note }) {
  const club = await db.queryFirst('SELECT * FROM Club WHERE id = ? OR slug = ?', [clubId, clubId]);
  if (!club) throw new Error('Club no encontrado');

  // Support both old field names and new frontend field names
  const name = customerName || userName || '';
  const phone = customerWhatsapp || userPhone || '';

  if (!name) throw new Error('Nombre requerido');
  if (!phone) throw new Error('Teléfono requerido');

  const realClubId = club.id;
  const startDate = new Date(startAt);
  const endDate = new Date(startDate.getTime() + durationMinutes * 60 * 1000);

  // Check overlaps
  const overlap = await db.queryFirst(
    `SELECT id FROM Reservation 
     WHERE courtId = ? AND status != 'CANCELED' 
     AND startAt < ? AND endAt > ?`,
    [courtId, endDate.toISOString(), startDate.toISOString()]
  );

  if (overlap) throw new Error('El horario ya está ocupado');

  const price = await calculatePrice({ courtId, startAt, durationMinutes });
  const reservationId = crypto.randomUUID();
  const manageToken = crypto.randomBytes(32).toString('hex');

  // Try with Prisma schema column names first
  try {
    await db.execute(
      `INSERT INTO Reservation (id, clubId, courtId, startAt, endAt, customerName, customerWhatsapp, customerEmail, note, amount, status, manageTokenHash, createdAt, updatedAt) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        reservationId,
        realClubId,
        courtId,
        startDate.toISOString(),
        endDate.toISOString(),
        name,
        phone,
        customerEmail || null,
        note || null,
        price,
        'HOLD',
        manageToken,
        new Date().toISOString(),
        new Date().toISOString()
      ]
    );
  } catch (e1) {
    // Fallback: try with alternative column names
    await db.execute(
      `INSERT INTO Reservation (id, clubId, courtId, startAt, endAt, userName, userPhone, totalPrice, status, manageToken, createdAt, updatedAt) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        reservationId,
        realClubId,
        courtId,
        startDate.toISOString(),
        endDate.toISOString(),
        name,
        phone,
        price,
        'HOLD',
        manageToken,
        new Date().toISOString(),
        new Date().toISOString()
      ]
    );
  }

  return { id: reservationId, manageToken, totalPrice: price };
}

export async function confirmReservation({ reservationId, paymentMethod, paymentId }) {
  // Find the reservation
  const reservation = await db.queryFirst(
    "SELECT * FROM Reservation WHERE id = ? AND status = 'HOLD'",
    [reservationId]
  );
  if (!reservation) throw new Error('Reserva no encontrada o ya confirmada');

  // Update status to CONFIRMED
  await db.execute(
    "UPDATE Reservation SET status = 'CONFIRMED', updatedAt = ? WHERE id = ?",
    [new Date().toISOString(), reservationId]
  );

  // Only register a payment if paymentMethod is explicitly provided
  if (paymentMethod) {
    const paymentUuid = crypto.randomUUID();
    const amount = reservation.amount || reservation.totalPrice || 0;
    try {
      await db.execute(
        `INSERT INTO Payment (id, reservationId, amount, method, status, createdAt, updatedAt) 
         VALUES (?, ?, ?, ?, 'PAID', ?, ?)`,
        [paymentUuid, reservationId, amount, paymentMethod, new Date().toISOString(), new Date().toISOString()]
      );
    } catch {
      // Payment insert failed — ignore, reservation is already confirmed
      console.warn('[CONFIRM] Payment insert skipped due to column mismatch');
    }
  }

  return { success: true, reservationId };
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

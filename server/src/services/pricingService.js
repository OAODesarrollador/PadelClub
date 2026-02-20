import { db } from '../db/db.js';

export async function calculatePrice({ courtId, startAt, durationMinutes }) {
  const court = await db.queryFirst('SELECT * FROM Court WHERE id = ?', [courtId]);
  if (!court) throw new Error('Cancha no encontrada');

  const basePrice = court.price;
  const startDate = new Date(startAt);
  const day = startDate.getDay();
  const minute = startDate.getHours() * 60 + startDate.getMinutes();

  const rules = await db.query(
    `SELECT * FROM PricingRule 
     WHERE clubId = ? AND active = 1 AND dayOfWeek = ? 
     AND startMinute <= ? AND endMinute > ?
     AND (courtId IS NULL OR courtId = ?)`,
    [court.clubId, day, minute, minute, courtId]
  );

  const sortedRules = rules.sort((a, b) => b.multiplier - a.multiplier);
  const best = sortedRules[0];

  if (!best) return Math.round(basePrice * (durationMinutes / 60));
  if (best.fixedPrice != null) return Math.round(best.fixedPrice * (durationMinutes / 60));
  return Math.round(basePrice * best.multiplier * (durationMinutes / 60));
}

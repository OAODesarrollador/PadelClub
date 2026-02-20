import { db } from '../db/db.js';

export function calculatePriceInMemory({ court, rules, startAt, durationMinutes }) {
  if (!court) throw new Error('Cancha no encontrada');

  const basePrice = court.basePrice !== undefined ? court.basePrice : (court.price || 0);
  const startDate = new Date(startAt);
  const day = startDate.getDay();
  const minute = startDate.getHours() * 60 + startDate.getMinutes();

  const applicableRules = (rules || []).filter(rule =>
    rule.active &&
    rule.dayOfWeek === day &&
    rule.startMinute <= minute &&
    rule.endMinute > minute &&
    (rule.courtId === null || rule.courtId === court.id)
  );

  const sortedRules = applicableRules.sort((a, b) => (b.multiplier || 1) - (a.multiplier || 1));
  const best = sortedRules[0];
  const durationFactor = (durationMinutes || 60) / 60;

  if (!best) return Math.round(basePrice * durationFactor);
  if (best.fixedPrice != null) return Math.round(best.fixedPrice * durationFactor);
  return Math.round(basePrice * (best.multiplier || 1) * durationFactor);
}

export async function calculatePrice({ courtId, startAt, durationMinutes }) {
  const court = await db.queryFirst('SELECT * FROM Court WHERE id = ?', [courtId]);
  if (!court) throw new Error('Cancha no encontrada');
  const clubId = court.clubId;
  const rules = await db.query('SELECT * FROM PricingRule WHERE clubId = ? AND active = 1', [clubId]);
  return calculatePriceInMemory({ court, rules, startAt, durationMinutes });
}

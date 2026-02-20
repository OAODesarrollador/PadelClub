import { db } from '../db/db.js';

/**
 * Optimized price calculation that works with pre-fetched data
 */
export function calculatePriceInMemory({ court, rules, startAt, durationMinutes }) {
  if (!court) throw new Error('Cancha no encontrada');

  const basePrice = court.basePrice;
  const startDate = new Date(startAt);
  const day = startDate.getDay();
  const minute = startDate.getHours() * 60 + startDate.getMinutes();

  // Filter rules for this specific day/time/court
  const applicableRules = rules.filter(rule =>
    rule.active &&
    rule.dayOfWeek === day &&
    rule.startMinute <= minute &&
    rule.endMinute > minute &&
    (rule.courtId === null || rule.courtId === court.id)
  );

  const sortedRules = applicableRules.sort((a, b) => b.multiplier - a.multiplier);
  const best = sortedRules[0];

  const durationFactor = durationMinutes / 60;

  if (!best) return Math.round(basePrice * durationFactor);
  if (best.fixedPrice != null) return Math.round(best.fixedPrice * durationFactor);
  return Math.round(basePrice * best.multiplier * durationFactor);
}

/**
 * Legacy wrapper for single calls if needed
 */
export async function calculatePrice({ courtId, startAt, durationMinutes }) {
  const court = await db.queryFirst('SELECT * FROM Court WHERE id = ?', [courtId]);
  const rules = await db.query('SELECT * FROM PricingRule WHERE clubId = ? AND active = 1', [court?.clubId]);
  return calculatePriceInMemory({ court, rules, startAt, durationMinutes });
}

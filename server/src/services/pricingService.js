import { prisma, rawLibsql } from '../db/prisma.js';

export async function calculatePrice({ clubId, courtId, startAt, durationMinutes }) {
  let court;
  try {
    court = await prisma.court.findUnique({ where: { id: courtId } });
  } catch (err) {
    console.warn(`[PRICING_FALLBACK] Prisma court fetch failed: ${err.message}. Using raw SQL.`);
    const rs = await rawLibsql.execute({
      sql: 'SELECT * FROM Court WHERE id = ? LIMIT 1',
      args: [courtId]
    });
    court = rs.rows[0];
  }

  const base = court?.basePrice || 0;
  const date = new Date(startAt);
  const day = date.getDay();
  const minute = date.getHours() * 60 + date.getMinutes();

  let rules;
  try {
    rules = await prisma.pricingRule.findMany({
      where: {
        clubId,
        active: true,
        dayOfWeek: day,
        startMinute: { lte: minute },
        endMinute: { gt: minute },
        OR: [{ courtId: null }, { courtId }]
      },
      orderBy: { multiplier: 'desc' }
    });
  } catch (err) {
    console.warn(`[PRICING_FALLBACK] Prisma rules fetch failed: ${err.message}. Using raw SQL.`);
    const rs = await rawLibsql.execute({
      sql: `SELECT * FROM PricingRule 
            WHERE clubId = ? 
            AND active = 1 
            AND dayOfWeek = ? 
            AND startMinute <= ? 
            AND endMinute > ? 
            AND (courtId IS NULL OR courtId = ?)
            ORDER BY multiplier DESC`,
      args: [clubId, day, minute, minute, courtId]
    });
    rules = rs.rows;
  }

  const best = rules[0];
  if (!best) return Math.round(base * (durationMinutes / 60));
  if (best.fixedPrice != null) return Math.round(best.fixedPrice * (durationMinutes / 60));
  return Math.round(base * best.multiplier * (durationMinutes / 60));
}

import { prisma } from '../db/prisma.js';

export async function calculatePrice({ clubId, courtId, startAt, durationMinutes }) {
  const court = await prisma.court.findUnique({ where: { id: courtId } });
  const base = court?.basePrice || 0;
  const date = new Date(startAt);
  const day = date.getDay();
  const minute = date.getHours() * 60 + date.getMinutes();

  const rules = await prisma.pricingRule.findMany({
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

  const best = rules[0];
  if (!best) return Math.round(base * (durationMinutes / 60));
  if (best.fixedPrice != null) return Math.round(best.fixedPrice * (durationMinutes / 60));
  return Math.round(base * best.multiplier * (durationMinutes / 60));
}

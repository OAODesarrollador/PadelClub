import { Router } from 'express';
import { db } from '../../db/db.js';
import { buildDaySlots, getActiveRangesForDate, isInsideActiveRanges } from '../../lib/schedule.js';
import { calculatePriceInMemory } from '../../services/pricingService.js';
import { getReservationsForPublic, getBlocksForPublic } from '../../services/reservationService.js';

const router = Router();

router.get('/club/:slug', async (req, res) => {
  try {
    const club = await db.queryFirst('SELECT * FROM Club WHERE slug = ?', [req.params.slug]);
    if (!club) return res.status(404).json({ error: 'NOT_FOUND' });

    const courts = await db.query('SELECT * FROM Court WHERE clubId = ? AND active = 1', [club.id]);
    club.courts = courts;

    return res.json(club);
  } catch (err) {
    console.error(`[PUBLIC_CLUB_ERROR]`, err);
    return res.status(500).json({ error: 'SERVER_ERROR', message: err.message });
  }
});

router.get('/availability', async (req, res) => {
  const { clubId, date, duration } = req.query;
  if (!clubId || !date || !duration) return res.status(400).json({ error: 'MISSING_PARAMS' });

  try {
    const club = await db.queryFirst('SELECT * FROM Club WHERE id = ? OR slug = ?', [clubId, clubId]);
    if (!club) return res.status(404).json({ error: 'CLUB_NOT_FOUND' });

    const durationMinutes = Number(duration);
    const courts = await db.query('SELECT * FROM Court WHERE clubId = ? AND active = 1 ORDER BY name ASC', [club.id]);
    const rules = await db.query('SELECT * FROM PricingRule WHERE clubId = ? AND active = 1', [club.id]);
    const reservations = await getReservationsForPublic(club.id, date);
    const blocks = await getBlocksForPublic(club.id);

    const schedule = club.scheduleJson || club.schedule || '{}';
    const activeRanges = getActiveRangesForDate(schedule, date);
    const rawSlots = buildDaySlots(date, 60);

    const data = rawSlots.map((slot) => {
      const startAt = new Date(slot.startAt);
      const endAt = new Date(startAt.getTime() + durationMinutes * 60 * 1000);

      const isWithinActiveRange = isInsideActiveRanges(activeRanges, startAt, endAt);

      return {
        startAt: slot.startAt,
        isWithinActiveRange,
        courts: courts.map((court) => {
          const isBlocked = blocks.some(b =>
            b.courtId === court.id &&
            ((new Date(b.startAt) < endAt && new Date(b.endAt) > startAt))
          );

          const isReserved = reservations.some(r =>
            r.courtId === court.id &&
            ((new Date(r.startAt) < endAt && new Date(r.endAt) > startAt))
          );

          const available = isWithinActiveRange && !isBlocked && !isReserved;

          return {
            courtId: court.id,
            courtName: court.name,
            available,
            startAllowed: available,
            price: available ? calculatePriceInMemory({ court, rules, startAt, durationMinutes }) : 0
          };
        })
      };
    });

    return res.json({
      clubId: club.id,
      clubSlug: club.slug,
      date,
      durationMinutes,
      activeRanges,
      slots: data
    });
  } catch (err) {
    console.error(`[AVAILABILITY_ERROR]`, err);
    return res.status(500).json({
      error: 'AVAILABILITY_ERROR',
      message: err.message,
      stack: err.stack
    });
  }
});

router.post('/hold', async (req, res) => {
  try {
    const { createHold } = await import('../../services/reservationService.js');
    const result = await createHold(req.body);
    return res.status(201).json(result);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

router.post('/confirm', async (req, res) => {
  try {
    const { confirmReservation } = await import('../../services/reservationService.js');
    const result = await confirmReservation(req.body);
    return res.json(result);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

router.get('/debug-db', async (req, res) => {
  try {
    const club = await db.queryFirst('SELECT COUNT(*) as count FROM Club');
    return res.json({ ok: true, count: club?.count, engine: 'Raw LibSQL' });
  } catch (err) {
    return res.json({ ok: false, message: err.message, stack: err.stack });
  }
});

export default router;

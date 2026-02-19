import { Router } from 'express';
import crypto from 'crypto';
import { prisma } from '../../db/prisma.js';
import { validate } from '../../middleware/validate.js';
import { publicHoldLimiter, publicManageLimiter } from '../../middleware/rateLimit.js';
import {
  holdSchema,
  confirmSchema,
  manageCancelSchema,
  manageRescheduleSchema,
  manageTokenQuerySchema,
  cashPaymentSchema,
  transferNotifySchema,
  mpPreferenceSchema,
  mpCardPaySchema
} from '../shared/schemas.js';
import {
  createHold,
  confirmReservation,
  resolveManageToken,
  cancelByManageToken,
  rescheduleByManageToken
} from '../../services/reservationService.js';
import { buildWhatsAppLink, messageProvider } from '../../services/messageService.js';
import { buildDaySlots, getActiveRangesForDate, isInsideActiveRanges } from '../../lib/schedule.js';
import { env } from '../../config/env.js';

const router = Router();
const phoneThrottle = new Map();

function estimatePrice({ basePrice, pricingRules, courtId, startAt, durationMinutes }) {
  const day = startAt.getDay();
  const minute = startAt.getHours() * 60 + startAt.getMinutes();
  const rules = pricingRules
    .filter((r) =>
      r.active &&
      r.dayOfWeek === day &&
      r.startMinute <= minute &&
      r.endMinute > minute &&
      (r.courtId === null || r.courtId === courtId)
    )
    .sort((a, b) => b.multiplier - a.multiplier);

  const best = rules[0];
  if (!best) return Math.round(basePrice * (durationMinutes / 60));
  if (best.fixedPrice != null) return Math.round(best.fixedPrice * (durationMinutes / 60));
  return Math.round(basePrice * best.multiplier * (durationMinutes / 60));
}

function throttlePhone(phone) {
  const now = Date.now();
  const entry = phoneThrottle.get(phone) || [];
  const recent = entry.filter((x) => now - x < 10 * 60 * 1000);
  if (recent.length >= 4) return false;
  recent.push(now);
  phoneThrottle.set(phone, recent);
  return true;
}

async function resolveClub(clubRef) {
  return prisma.club.findFirst({
    where: {
      OR: [{ id: clubRef }, { slug: clubRef }],
      active: true
    }
  });
}

router.get('/club/:slug', async (req, res) => {
  const club = await prisma.club.findUnique({ where: { slug: req.params.slug }, include: { courts: true } });
  if (!club) return res.status(404).json({ error: 'NOT_FOUND' });
  return res.json(club);
});

router.get('/availability', async (req, res) => {
  const { clubId, date, duration } = req.query;
  if (!clubId || !date || !duration) return res.status(400).json({ error: 'MISSING_PARAMS' });

  const d = new Date(`${date}T00:00:00`);
  const durationMinutes = Number(duration);
  if (![60, 120].includes(durationMinutes)) {
    return res.status(400).json({ error: 'INVALID_DURATION' });
  }

  const club = await resolveClub(String(clubId));
  if (!club) return res.status(404).json({ error: 'CLUB_NOT_FOUND' });

  const activeRanges = getActiveRangesForDate(club.scheduleJson, String(date));
  const slots = buildDaySlots(String(date), 60);

  const courts = await prisma.court.findMany({ where: { clubId: club.id, active: true }, orderBy: { name: 'asc' } });
  const pricingRules = await prisma.pricingRule.findMany({ where: { clubId: club.id, active: true } });
  const dayStart = d;
  const dayEnd = new Date(d.getTime() + 24 * 60 * 60 * 1000);

  const reservations = await prisma.reservation.findMany({
    where: {
      clubId: club.id,
      OR: [
        { status: 'CONFIRMED' },
        { status: 'HOLD', holdExpiresAt: { gt: new Date() } }
      ],
      startAt: { lt: dayEnd },
      endAt: { gt: dayStart }
    }
  });
  const blocks = await prisma.block.findMany({
    where: {
      clubId: club.id,
      startAt: { lt: dayEnd },
      endAt: { gt: dayStart }
    }
  });

  const data = slots.map((slot) => {
    const start = new Date(slot.startAt);
    const slotEnd = new Date(start.getTime() + 60 * 60 * 1000);
    const desiredEnd = new Date(start.getTime() + durationMinutes * 60 * 1000);
    const isWithinActiveRange = isInsideActiveRanges(activeRanges, start, slotEnd);

    const byCourt = courts.map((court) => {
      const rConflict = reservations.some((r) => r.courtId === court.id && start < r.endAt && slotEnd > r.startAt);
      const bConflict = blocks.some((b) => b.courtId === court.id && start < b.endAt && slotEnd > b.startAt);
      const rStartConflict = reservations.some((r) => r.courtId === court.id && start < r.endAt && desiredEnd > r.startAt);
      const bStartConflict = blocks.some((b) => b.courtId === court.id && start < b.endAt && desiredEnd > b.startAt);
      const price = estimatePrice({
        basePrice: court.basePrice || 0,
        pricingRules,
        courtId: court.id,
        startAt: start,
        durationMinutes
      });
      return {
        courtId: court.id,
        courtName: court.name,
        available: isWithinActiveRange && !(rConflict || bConflict),
        startAllowed: isWithinActiveRange && !(rStartConflict || bStartConflict),
        price
      };
    });
    return { startAt: slot.startAt, isWithinActiveRange, courts: byCourt };
  });

  return res.json({
    clubId: club.id,
    clubSlug: club.slug,
    date,
    durationMinutes,
    activeRanges,
    slots: data
  });
});

router.post('/reservations/hold', publicHoldLimiter, validate(holdSchema), async (req, res) => {
  if (!throttlePhone(req.body.customerWhatsapp)) {
    return res.status(429).json({ error: 'PHONE_THROTTLED' });
  }

  try {
    const { reservation, manageToken } = await createHold(req.body);
    return res.status(201).json({ reservation, manageToken });
  } catch (error) {
    return res.status(409).json({ error: error.message });
  }
});

router.post('/reservations/confirm', validate(confirmSchema), async (req, res) => {
  try {
    const reservation = await confirmReservation(req.body.reservationId);
    return res.json(reservation);
  } catch (error) {
    return res.status(409).json({ error: error.message });
  }
});

router.get('/reservations/:id/summary', async (req, res) => {
  const reservation = await prisma.reservation.findUnique({
    where: { id: req.params.id },
    include: { club: true, court: true }
  });
  if (!reservation) return res.status(404).json({ error: 'NOT_FOUND' });

  const customerText = `Reserva confirmada en ${reservation.club.name}. ${reservation.startAt.toLocaleString()} - ${reservation.court.name}.`;
  const clubText = `Nueva reserva ${reservation.id}. ${reservation.customerName} ${reservation.customerWhatsapp}.`;
  const waCustomer = buildWhatsAppLink(reservation.customerWhatsapp, customerText);
  const waClub = reservation.club.whatsapp ? buildWhatsAppLink(reservation.club.whatsapp, clubText) : null;

  await messageProvider.send({ reservationId: reservation.id, destination: reservation.customerWhatsapp, payload: { type: 'summary_link' } });

  return res.json({ reservation, waCustomer, waClub });
});

router.get('/manage', publicManageLimiter, validate(manageTokenQuerySchema, 'query'), async (req, res) => {
  const reservation = await resolveManageToken(req.query.token);
  if (!reservation) return res.status(404).json({ error: 'NOT_FOUND' });
  return res.json(reservation);
});

router.post('/manage/cancel', publicManageLimiter, validate(manageCancelSchema), async (req, res) => {
  try {
    const reservation = await cancelByManageToken(req.body);
    return res.json(reservation);
  } catch (error) {
    return res.status(409).json({ error: error.message });
  }
});

router.post('/manage/reschedule', publicManageLimiter, validate(manageRescheduleSchema), async (req, res) => {
  try {
    const data = await rescheduleByManageToken(req.body);
    return res.json(data);
  } catch (error) {
    return res.status(409).json({ error: error.message });
  }
});

router.post('/payments/cash', validate(cashPaymentSchema), async (req, res) => {
  const reservation = await prisma.reservation.findUnique({ where: { id: req.body.reservationId } });
  if (!reservation) return res.status(404).json({ error: 'RESERVATION_NOT_FOUND' });

  const payment = await prisma.payment.create({
    data: {
      reservationId: reservation.id,
      amount: reservation.amount || 0,
      method: 'EFECTIVO',
      status: 'PAID',
      note: 'Pago confirmado en efectivo'
    }
  });

  return res.status(201).json({ ok: true, payment });
});

router.post('/payments/transfer-notify', validate(transferNotifySchema), async (req, res) => {
  const reservation = await prisma.reservation.findUnique({ where: { id: req.body.reservationId } });
  if (!reservation) return res.status(404).json({ error: 'RESERVATION_NOT_FOUND' });

  const payment = await prisma.payment.create({
    data: {
      reservationId: reservation.id,
      amount: reservation.amount || 0,
      method: 'TRANSFERENCIA_MANUAL',
      status: 'PENDING',
      note: req.body.note || 'Cliente informó transferencia manual desde confirmación pública'
    }
  });

  return res.status(201).json({ ok: true, payment });
});

router.get('/payments/mercadopago/config', async (_req, res) => {
  return res.json({
    enabled: Boolean(env.mpAccessToken && env.mpPublicKey),
    publicKey: env.mpPublicKey || null
  });
});

router.post('/payments/mercadopago/preference', validate(mpPreferenceSchema), async (req, res) => {
  if (!env.mpAccessToken) return res.status(503).json({ error: 'MP_NOT_CONFIGURED' });

  const reservation = await prisma.reservation.findUnique({
    where: { id: req.body.reservationId },
    include: { court: true, club: true }
  });
  if (!reservation) return res.status(404).json({ error: 'RESERVATION_NOT_FOUND' });

  const title = `${reservation.club?.name || 'Club'} - ${reservation.court?.name || 'Cancha'}`;
  const unitPrice = Number(reservation.amount || 0);
  const successUrl = `${env.appBaseUrl}/confirmacion/${reservation.id}?payment=success`;
  const pendingUrl = `${env.appBaseUrl}/confirmacion/${reservation.id}?payment=pending`;
  const failureUrl = `${env.appBaseUrl}/confirmacion/${reservation.id}?payment=failure`;

  const paymentMethodsByMode =
    req.body.mode === 'card'
      ? {
          excluded_payment_types: [
            { id: 'ticket' },
            { id: 'atm' },
            { id: 'bank_transfer' }
          ]
        }
      : {
          excluded_payment_types: [
            { id: 'credit_card' },
            { id: 'debit_card' },
            { id: 'prepaid_card' },
            { id: 'ticket' },
            { id: 'atm' }
          ]
        };

  const prefPayload = {
    items: [
      {
        title,
        quantity: 1,
        unit_price: unitPrice,
        currency_id: 'ARS'
      }
    ],
    external_reference: reservation.id,
    payment_methods: paymentMethodsByMode,
    back_urls: {
      success: successUrl,
      pending: pendingUrl,
      failure: failureUrl
    }
  };

  try {
    const mpRes = await fetch('https://api.mercadopago.com/checkout/preferences', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${env.mpAccessToken}`
      },
      body: JSON.stringify(prefPayload)
    });

    if (!mpRes.ok) {
      const detail = await mpRes.text();
      return res.status(502).json({ error: 'MP_PREFERENCE_ERROR', detail });
    }

    const pref = await mpRes.json();

    const payment = await prisma.payment.create({
      data: {
        reservationId: reservation.id,
        amount: unitPrice,
        method: req.body.mode === 'card' ? 'MERCADOPAGO_CARD' : 'MERCADOPAGO_TRANSFER',
        status: 'PENDING',
        note: `Preference ${pref.id}`
      }
    });

    return res.status(201).json({
      ok: true,
      payment,
      preferenceId: pref.id,
      initPoint: pref.init_point,
      sandboxInitPoint: pref.sandbox_init_point || null,
      mpPublicKey: env.mpPublicKey || null,
      appDeepLink: `mercadopago://checkout?pref_id=${pref.id}`
    });
  } catch (error) {
    return res.status(502).json({
      error: 'MP_PREFERENCE_ERROR',
      detail: error?.message || 'NETWORK_OR_PROVIDER_ERROR'
    });
  }
});

router.post('/payments/mercadopago/card-pay', validate(mpCardPaySchema), async (req, res) => {
  if (!env.mpAccessToken) return res.status(503).json({ error: 'MP_NOT_CONFIGURED' });

  const reservation = await prisma.reservation.findUnique({
    where: { id: req.body.reservationId },
    include: { club: true, court: true }
  });
  if (!reservation) return res.status(404).json({ error: 'RESERVATION_NOT_FOUND' });

  const paymentMethodId = req.body.payment_method_id || req.body.paymentMethodId;
  const issuerId = req.body.issuer_id || req.body.issuerId;
  const payerEmail = req.body.payer?.email || req.body.payerEmail;
  const identificationType = req.body.payer?.identification?.type || req.body.identificationType;
  const identificationNumber = req.body.payer?.identification?.number || req.body.identificationNumber;

  if (!paymentMethodId) return res.status(400).json({ error: 'MP_CARD_PAYMENT_INVALID_PAYMENT_METHOD' });
  if (!payerEmail) return res.status(400).json({ error: 'MP_CARD_PAYMENT_INVALID_PAYER_EMAIL' });

  const body = {
    transaction_amount: Number(reservation.amount || 0),
    token: req.body.token,
    installments: req.body.installments,
    payment_method_id: paymentMethodId,
    issuer_id: issuerId || undefined,
    description: `${reservation.club?.name || 'Club'} - ${reservation.court?.name || 'Cancha'}`,
    payer: {
      email: payerEmail,
      identification:
        identificationType && identificationNumber
          ? {
              type: identificationType,
              number: identificationNumber
            }
          : undefined
    },
    external_reference: reservation.id
  };

  try {
    const idempotencyKey = `clubpaddle-${reservation.id}-${Date.now()}-${crypto.randomUUID()}`;
    const mpRes = await fetch('https://api.mercadopago.com/v1/payments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${env.mpAccessToken}`,
        'X-Idempotency-Key': idempotencyKey
      },
      body: JSON.stringify(body)
    });

    const resultText = await mpRes.text();
    let resultJson = null;
    try {
      resultJson = JSON.parse(resultText);
    } catch {
      resultJson = null;
    }

    if (!mpRes.ok) {
      return res.status(502).json({ error: 'MP_CARD_PAYMENT_ERROR', detail: resultText });
    }

    const approved = resultJson?.status === 'approved';
    const payment = await prisma.payment.create({
      data: {
        reservationId: reservation.id,
        amount: Number(reservation.amount || 0),
        method: 'MERCADOPAGO_CARD',
        status: approved ? 'PAID' : 'PENDING',
        note: `MP payment ${resultJson?.id || ''} status ${resultJson?.status || 'unknown'}`
      }
    });

    return res.status(201).json({
      ok: true,
      approved,
      mpPayment: resultJson,
      payment
    });
  } catch (error) {
    return res.status(502).json({
      error: 'MP_CARD_PAYMENT_ERROR',
      detail: error?.message || 'NETWORK_OR_PROVIDER_ERROR'
    });
  }
});

export default router;

import { z } from 'zod';

export const e164 = z.string().regex(/^\+[1-9]\d{7,14}$/);

export const holdSchema = z.object({
  clubId: z.string().min(1),
  courtId: z.string().optional(),
  startAt: z.string().datetime(),
  durationMinutes: z.union([z.literal(60), z.literal(120)]),
  customerName: z.string().min(2).max(80),
  customerWhatsapp: e164,
  customerEmail: z.string().email().optional().or(z.literal('')),
  note: z.string().max(300).optional()
});

export const confirmSchema = z.object({
  reservationId: z.string().min(1)
});

export const cashPaymentSchema = z.object({
  reservationId: z.string().min(1)
});

export const transferNotifySchema = z.object({
  reservationId: z.string().min(1),
  note: z.string().max(300).optional()
});

export const mpPreferenceSchema = z.object({
  reservationId: z.string().min(1),
  mode: z.enum(['card', 'transfer'])
});

export const mpCardPaySchema = z.object({
  reservationId: z.string().min(1),
  token: z.string().min(8),
  paymentMethodId: z.string().min(2).optional(),
  payment_method_id: z.string().min(2).optional(),
  issuerId: z.string().optional(),
  issuer_id: z.string().optional(),
  installments: z.number().int().min(1).max(24),
  payerEmail: z.string().email().optional(),
  payer: z
    .object({
      email: z.string().email().optional(),
      identification: z
        .object({
          type: z.string().optional(),
          number: z.string().optional()
        })
        .optional()
    })
    .optional(),
  identificationType: z.string().optional(),
  identificationNumber: z.string().optional()
});

export const manageTokenQuerySchema = z.object({
  token: z.string().min(40)
});

export const manageCancelSchema = z.object({
  token: z.string().min(40),
  reason: z.string().max(200).optional()
});

export const manageRescheduleSchema = z.object({
  token: z.string().min(40),
  startAt: z.string().datetime(),
  durationMinutes: z.union([z.literal(60), z.literal(120)]),
  courtId: z.string().optional()
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
});

export const refreshSchema = z.object({
  refreshToken: z.string().min(10)
});

const hhmmSchema = z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/);

export const scheduleRangeSchema = z.object({
  start: hhmmSchema,
  end: hhmmSchema
});

export const clubScheduleSchema = z.record(z.array(scheduleRangeSchema)).or(
  z.object({ default: z.array(scheduleRangeSchema) }).passthrough()
);

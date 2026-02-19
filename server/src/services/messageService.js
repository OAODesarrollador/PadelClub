import { prisma } from '../db/prisma.js';

export class MessageProvider {
  async send({ reservationId, destination, payload }) {
    try {
      await prisma.messageLog.create({
        data: {
          reservationId,
          channel: 'WA_LINK',
          destination,
          payload: JSON.stringify(payload),
          success: true
        }
      });
    } catch (err) {
      console.warn(`[MessageProvider] Failed to log message for reservation ${reservationId}: ${err.message}`);
    }
    return { ok: true };
  }
}

export const messageProvider = new MessageProvider();

export function buildWhatsAppLink(phone, text) {
  return `https://wa.me/${phone.replace('+', '')}?text=${encodeURIComponent(text)}`;
}

import { prisma } from '../db/prisma.js';

export class MessageProvider {
  async send({ reservationId, destination, payload }) {
    await prisma.messageLog.create({
      data: {
        reservationId,
        channel: 'WA_LINK',
        destination,
        payload: JSON.stringify(payload),
        success: true
      }
    });
    return { ok: true };
  }
}

export const messageProvider = new MessageProvider();

export function buildWhatsAppLink(phone, text) {
  return `https://wa.me/${phone.replace('+', '')}?text=${encodeURIComponent(text)}`;
}

import { db } from '../db/db.js';

export async function logMessage({ reservationId, phone, type, provider, status, externalId, error }) {
  try {
    await db.execute(
      `INSERT INTO MessageLog (id, reservationId, phone, type, provider, status, externalId, error, createdAt) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        crypto.randomUUID(),
        reservationId,
        phone,
        type,
        provider,
        status,
        externalId,
        error,
        new Date().toISOString()
      ]
    );
  } catch (err) {
    console.error(`[MESSAGE_LOG_ERROR] ${err.message}`);
  }
}

export function buildWhatsAppLink(phone, message) {
  const cleanPhone = String(phone || '').replace(/\D/g, '');
  if (!cleanPhone) return null;
  return `https://wa.me/${cleanPhone}/?text=${encodeURIComponent(message)}`;
}

export const messageProvider = {
  async send(phone, message) {
    console.log(`[MOCKED_SMS] To: ${phone}, Msg: ${message}`);
    return { success: true, id: `msg-${Date.now()}` };
  }
};

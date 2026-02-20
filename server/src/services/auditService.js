import { db } from '../db/db.js';
import crypto from 'crypto';

export async function logAudit({ userId, action, resource, resourceId, details }) {
  try {
    await db.execute(
      `INSERT INTO AuditLog (id, userId, action, resource, resourceId, details, createdAt) 
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        crypto.randomUUID(),
        userId,
        action,
        resource,
        resourceId,
        typeof details === 'object' ? JSON.stringify(details) : details,
        new Date().toISOString()
      ]
    );
  } catch (err) {
    console.error(`[AUDIT_ERROR] ${err.message}`);
  }
}

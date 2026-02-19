import { prisma } from '../db/prisma.js';

export async function logAudit({ actorUserId, entity, entityId, action, before, after }) {
  await prisma.auditLog.create({
    data: {
      actorUserId,
      entity,
      entityId,
      action,
      beforeJson: before ? JSON.stringify(before) : null,
      afterJson: after ? JSON.stringify(after) : null
    }
  });
}

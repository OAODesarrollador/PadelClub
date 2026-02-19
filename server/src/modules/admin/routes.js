import { Router } from 'express';
import bcrypt from 'bcryptjs';
import { prisma } from '../../db/prisma.js';
import { validate } from '../../middleware/validate.js';
import { loginLimiter } from '../../middleware/rateLimit.js';
import { requireAuth, requireRole } from '../../middleware/auth.js';
import { loginSchema, refreshSchema, clubScheduleSchema } from '../shared/schemas.js';
import { signAccessToken, signRefreshToken, verifyRefreshToken } from '../../lib/jwt.js';
import { getDayAgenda } from '../../services/reservationService.js';
import { logAudit } from '../../services/auditService.js';
import { createBackup, listBackups } from '../../services/backupService.js';
import { machineFingerprint, verifyLicenseKey } from '../../services/licenseService.js';
import { randomManageToken, hashManageToken } from '../../lib/token.js';

const router = Router();

function normalizeClubPayload(payload) {
  const next = { ...payload };
  if (next.scheduleJson && typeof next.scheduleJson === 'object') {
    const parsed = clubScheduleSchema.safeParse(next.scheduleJson);
    if (!parsed.success) throw new Error('INVALID_SCHEDULE_JSON');
    next.scheduleJson = JSON.stringify(parsed.data);
  }
  return next;
}

router.post('/auth/login', loginLimiter, validate(loginSchema), async (req, res) => {
  const user = await prisma.staffUser.findUnique({ where: { email: req.body.email } });
  if (!user || !user.active) return res.status(401).json({ error: 'INVALID_CREDENTIALS' });

  const ok = await bcrypt.compare(req.body.password, user.passwordHash);
  if (!ok) return res.status(401).json({ error: 'INVALID_CREDENTIALS' });

  const payload = { sub: user.id, role: user.role, email: user.email };
  return res.json({
    accessToken: signAccessToken(payload),
    refreshToken: signRefreshToken(payload),
    user: { id: user.id, role: user.role, fullName: user.fullName }
  });
});

router.post('/auth/refresh', validate(refreshSchema), async (req, res) => {
  try {
    const payload = verifyRefreshToken(req.body.refreshToken);
    return res.json({ accessToken: signAccessToken(payload) });
  } catch {
    return res.status(401).json({ error: 'INVALID_REFRESH' });
  }
});

router.use(requireAuth);

router.get('/agenda', async (req, res) => {
  const date = req.query.date || new Date().toISOString().slice(0, 10);
  const agenda = await getDayAgenda(date);
  return res.json(agenda);
});

router.get('/clubs', async (_req, res) => res.json(await prisma.club.findMany()));
router.post('/clubs', requireRole('ADMIN'), async (req, res) => {
  try {
    const data = normalizeClubPayload(req.body);
    return res.status(201).json(await prisma.club.create({ data }));
  } catch (e) {
    return res.status(400).json({ error: e.message || 'INVALID_CLUB_PAYLOAD' });
  }
});
router.put('/clubs/:id', requireRole('ADMIN'), async (req, res) => {
  try {
    const data = normalizeClubPayload(req.body);
    return res.json(await prisma.club.update({ where: { id: req.params.id }, data }));
  } catch (e) {
    return res.status(400).json({ error: e.message || 'INVALID_CLUB_PAYLOAD' });
  }
});
router.delete('/clubs/:id', requireRole('ADMIN'), async (req, res) => res.json(await prisma.club.update({ where: { id: req.params.id }, data: { active: false } })));

router.get('/courts', async (req, res) => res.json(await prisma.court.findMany({ where: { clubId: String(req.query.clubId || '') } })));
router.post('/courts', requireRole('ADMIN'), async (req, res) => res.status(201).json(await prisma.court.create({ data: req.body })));
router.put('/courts/:id', requireRole('ADMIN'), async (req, res) => res.json(await prisma.court.update({ where: { id: req.params.id }, data: req.body })));
router.delete('/courts/:id', requireRole('ADMIN'), async (req, res) => res.json(await prisma.court.update({ where: { id: req.params.id }, data: { active: false } })));

router.get('/blocks', async (_req, res) => res.json(await prisma.block.findMany()));
router.post('/blocks', async (req, res) => res.status(201).json(await prisma.block.create({ data: { ...req.body, createdById: req.user.sub } })));
router.put('/blocks/:id', async (req, res) => res.json(await prisma.block.update({ where: { id: req.params.id }, data: req.body })));
router.delete('/blocks/:id', async (req, res) => res.json(await prisma.block.delete({ where: { id: req.params.id } })));

router.get('/pricing', async (_req, res) => res.json(await prisma.pricingRule.findMany()));
router.post('/pricing', requireRole('ADMIN'), async (req, res) => res.status(201).json(await prisma.pricingRule.create({ data: req.body })));
router.put('/pricing/:id', requireRole('ADMIN'), async (req, res) => res.json(await prisma.pricingRule.update({ where: { id: req.params.id }, data: req.body })));
router.delete('/pricing/:id', requireRole('ADMIN'), async (req, res) => res.json(await prisma.pricingRule.delete({ where: { id: req.params.id } })));

router.get('/reservations', async (_req, res) => res.json(await prisma.reservation.findMany({ orderBy: { createdAt: 'desc' }, take: 200 })));
router.post('/reservations', async (req, res) => res.status(201).json(await prisma.reservation.create({ data: { ...req.body, createdByKind: 'STAFF', createdByStaffId: req.user.sub } })));
router.put('/reservations/:id', async (req, res) => res.json(await prisma.reservation.update({ where: { id: req.params.id }, data: req.body })));
router.delete('/reservations/:id', async (req, res) => res.json(await prisma.reservation.update({ where: { id: req.params.id }, data: { status: 'CANCELED', canceledAt: new Date() } })));

router.post('/reservations/:id/resend-manage-link', async (req, res) => {
  const token = randomManageToken();
  const reservation = await prisma.reservation.update({
    where: { id: req.params.id },
    data: { manageTokenHash: hashManageToken(token), manageTokenLastRotatedAt: new Date() }
  });
  await logAudit({ actorUserId: req.user.sub, entity: 'Reservation', entityId: reservation.id, action: 'RESEND_MANAGE_LINK', after: { rotated: true } });
  return res.json({ reservationId: reservation.id, manageUrl: `/gestionar?token=${token}` });
});

router.get('/users', requireRole('ADMIN'), async (_req, res) => res.json(await prisma.staffUser.findMany()));
router.post('/users', requireRole('ADMIN'), async (req, res) => {
  const hash = await bcrypt.hash(req.body.password, 12);
  const created = await prisma.staffUser.create({
    data: { email: req.body.email, fullName: req.body.fullName, role: req.body.role, passwordHash: hash }
  });
  return res.status(201).json(created);
});
router.put('/users/:id', requireRole('ADMIN'), async (req, res) => res.json(await prisma.staffUser.update({ where: { id: req.params.id }, data: req.body })));
router.delete('/users/:id', requireRole('ADMIN'), async (req, res) => res.json(await prisma.staffUser.update({ where: { id: req.params.id }, data: { active: false } })));

router.post('/backups/create', requireRole('ADMIN'), async (_req, res) => {
  const exportJson = {
    clubs: await prisma.club.findMany(),
    courts: await prisma.court.findMany(),
    reservations: await prisma.reservation.findMany(),
    blocks: await prisma.block.findMany(),
    pricingRules: await prisma.pricingRule.findMany()
  };
  const backupDir = createBackup({ baseDir: 'backups', sqlitePath: 'prisma/dev.db', exportJson });
  return res.json({ backupDir });
});

router.get('/backups/list', requireRole('ADMIN'), async (_req, res) => res.json({ backups: listBackups('backups') }));

router.post('/backups/restore', requireRole('ADMIN'), async (req, res) => {
  return res.json({ ok: true, message: 'Restore MVP: use backup JSON as source and run manual restore script.', requested: req.body });
});

router.get('/license/status', requireRole('ADMIN'), async (_req, res) => {
  const lic = await prisma.license.findFirst({ orderBy: { createdAt: 'desc' } });
  return res.json({
    communityBuild: false,
    machineHash: machineFingerprint(),
    license: lic || null,
    active: lic?.active || false
  });
});

router.post('/license/activate', requireRole('ADMIN'), async (req, res) => {
  const check = verifyLicenseKey(req.body.licenseKey);
  if (!check.valid) return res.status(400).json({ error: 'INVALID_LICENSE_KEY' });

  const record = await prisma.license.create({
    data: {
      clubId: req.body.clubId || null,
      machineHash: machineFingerprint(),
      licenseKey: req.body.licenseKey,
      validUntil: check.payload?.validUntil ? new Date(check.payload.validUntil) : null,
      metadataJson: JSON.stringify(check.payload || {})
    }
  });

  await logAudit({ actorUserId: req.user.sub, entity: 'License', entityId: record.id, action: 'ACTIVATE', after: check.payload });
  return res.status(201).json(record);
});

export default router;

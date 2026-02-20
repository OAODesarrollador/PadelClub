import { Router } from 'express';
import { db } from '../../db/db.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { env } from '../../config/env.js';
import crypto from 'crypto';

const router = Router();

// Middleware simple para roles (simplificado para la migración)
const requireAuth = async (req, res, next) => {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({ error: 'UNAUTHORIZED' });
  try {
    const token = auth.split(' ')[1];
    const decoded = jwt.verify(token, env.jwtAccessSecret);
    req.user = decoded;
    next();
  } catch {
    return res.status(401).json({ error: 'UNAUTHORIZED' });
  }
};

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await db.queryFirst('SELECT * FROM StaffUser WHERE email = ? AND active = 1', [email]);
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ error: 'INVALID_CREDENTIALS' });
  }

  const token = jwt.sign({ sub: user.id, role: user.role }, env.jwtAccessSecret, { expiresIn: '8h' });
  return res.json({ token, user: { id: user.id, email: user.email, role: user.role } });
});

router.get('/clubs', requireAuth, async (req, res) => {
  const clubs = await db.query('SELECT * FROM Club WHERE active = 1');
  res.json(clubs);
});

router.post('/clubs', requireAuth, async (req, res) => {
  const id = crypto.randomUUID();
  const { name, slug, address, phone, schedule, basePrice } = req.body;
  await db.execute(
    'INSERT INTO Club (id, name, slug, address, phone, schedule, basePrice, active, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, 1, ?, ?)',
    [id, name, slug, address, phone, JSON.stringify(schedule), basePrice || 0, new Date().toISOString(), new Date().toISOString()]
  );
  const club = await db.queryFirst('SELECT * FROM Club WHERE id = ?', [id]);
  res.status(201).json(club);
});

router.get('/reservations', requireAuth, async (req, res) => {
  const { clubId, date } = req.query;
  let sql = 'SELECT * FROM Reservation WHERE 1=1';
  const args = [];
  if (clubId) { sql += ' AND clubId = ?'; args.push(clubId); }
  if (date) { sql += ' AND startAt LIKE ?'; args.push(`${date}%`); }
  sql += ' ORDER BY startAt DESC';
  const rows = await db.query(sql, args);
  res.json(rows);
});

export default router;

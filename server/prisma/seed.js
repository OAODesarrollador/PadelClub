import bcrypt from 'bcryptjs';
import { StaffRole, ReservationStatus, CreatedByKind } from './generated/client/index.js';
import { prisma } from '../src/db/prisma.js';
import crypto from 'crypto';

function hashToken(token) {
  return crypto.createHash('sha256').update(token).digest('hex');
}

async function main() {
  const club = await prisma.club.upsert({
    where: { slug: 'club-paddle-demo' },
    update: {},
    create: {
      slug: 'club-paddle-demo',
      name: 'Club Paddle Demo',
      address: 'Av. Central 123',
      whatsapp: '+5491112345678',
      mapLink: 'https://maps.google.com/?q=Av.+Central+123',
      transferAlias: 'club.paddle.demo',
      transferCvuCbu: '0000003100091234567890',
      scheduleJson: JSON.stringify({
        1: [{ start: '08:00', end: '23:00' }],
        2: [{ start: '08:00', end: '23:00' }],
        3: [{ start: '08:00', end: '23:00' }],
        4: [{ start: '08:00', end: '23:00' }],
        5: [{ start: '08:00', end: '23:00' }],
        6: [{ start: '08:00', end: '23:00' }],
        0: [{ start: '08:00', end: '21:00' }]
      })
    }
  });

  await prisma.court.upsert({
    where: { id: 'demo-court-1' },
    update: {},
    create: { id: 'demo-court-1', clubId: club.id, name: 'Cancha 1', basePrice: 18000 }
  });

  await prisma.court.upsert({
    where: { id: 'demo-court-2' },
    update: {},
    create: { id: 'demo-court-2', clubId: club.id, name: 'Cancha 2', basePrice: 20000 }
  });

  const pass = await bcrypt.hash('admin1234', 12);

  await prisma.staffUser.upsert({
    where: { email: 'admin@club.local' },
    update: {},
    create: {
      email: 'admin@club.local',
      fullName: 'Administrador',
      role: StaffRole.ADMIN,
      passwordHash: pass
    }
  });

  await prisma.staffUser.upsert({
    where: { email: 'secretario@club.local' },
    update: {},
    create: {
      email: 'secretario@club.local',
      fullName: 'Secretario',
      role: StaffRole.SECRETARIO,
      passwordHash: pass
    }
  });

  const token = 'demo-manage-token';
  await prisma.reservation.upsert({
    where: { id: 'demo-reservation-1' },
    update: {},
    create: {
      id: 'demo-reservation-1',
      clubId: club.id,
      courtId: 'demo-court-1',
      status: ReservationStatus.CONFIRMED,
      startAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
      endAt: new Date(Date.now() + 25.5 * 60 * 60 * 1000),
      customerName: 'Jugador Demo',
      customerWhatsapp: '+5491199999999',
      customerEmail: 'demo@cliente.com',
      manageTokenHash: hashToken(token),
      createdByKind: CreatedByKind.PUBLIC,
      amount: 18000
    }
  });

  console.log('Seed completado');
}

main().finally(async () => prisma.$disconnect());

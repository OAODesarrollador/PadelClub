import { describe, it, expect, vi, beforeEach } from 'vitest';

const state = {
  courts: [{ id: 'c1', clubId: 'club1', active: true, name: 'Cancha 1', basePrice: 100 }],
  reservations: [],
  blocks: []
};

vi.mock('../src/db/prisma.js', () => ({
  prisma: {
    club: {
      findFirst: vi.fn(async ({ where }) => {
        const ref = where?.OR?.[0]?.id || where?.OR?.[1]?.slug;
        if (ref === 'club1') return { id: 'club1', slug: 'club1', scheduleJson: JSON.stringify({ default: [{ start: '00:00', end: '23:59' }] }) };
        return null;
      }),
      findUnique: vi.fn(async ({ where }) => {
        if (where?.id === 'club1') return { id: 'club1', slug: 'club1', scheduleJson: JSON.stringify({ default: [{ start: '00:00', end: '23:59' }] }) };
        return null;
      })
    },
    court: {
      findMany: vi.fn(async ({ where }) => state.courts.filter((c) => c.clubId === where.clubId)),
      findUnique: vi.fn(async ({ where }) => state.courts.find((c) => c.id === where.id))
    },
    reservation: {
      findMany: vi.fn(async ({ where }) => {
        return state.reservations.filter((r) => {
          if (where.clubId && r.clubId !== where.clubId) return false;
          if (where.courtId && r.courtId !== where.courtId) return false;
          if (where.status?.in && !where.status.in.includes(r.status)) return false;
          return true;
        });
      }),
      create: vi.fn(async ({ data }) => {
        const row = { id: `r${state.reservations.length + 1}`, ...data };
        state.reservations.push(row);
        return row;
      }),
      findUnique: vi.fn(async ({ where }) => state.reservations.find((r) => r.id === where.id)),
      update: vi.fn(async ({ where, data }) => {
        const i = state.reservations.findIndex((r) => r.id === where.id);
        state.reservations[i] = { ...state.reservations[i], ...data };
        return state.reservations[i];
      })
    },
    block: {
      findMany: vi.fn(async ({ where }) => state.blocks.filter((b) => b.clubId === where.clubId && b.courtId === where.courtId))
    },
    pricingRule: { findMany: vi.fn(async () => []) },
    $transaction: vi.fn(async (fn) => fn({ reservation: { create: async ({ data }) => ({ id: `r${state.reservations.length + 1}`, ...data }) } }))
  }
}));

const mod = await import('../src/services/reservationService.js');

beforeEach(() => {
  state.reservations = [];
  vi.restoreAllMocks();
});

describe('Reservations', () => {
  it('No solape: dos reservas mismo slot/cancha, una falla', async () => {
    const start = new Date('2030-01-01T10:00:00.000Z').toISOString();

    const first = await mod.createHold({
      clubId: 'club1',
      courtId: 'c1',
      startAt: start,
      durationMinutes: 90,
      customerName: 'A',
      customerWhatsapp: '+5491111111111'
    });

    state.reservations.push({ ...first.reservation, status: 'CONFIRMED' });

    await expect(
      mod.createHold({
        clubId: 'club1',
        courtId: 'c1',
        startAt: start,
        durationMinutes: 90,
        customerName: 'B',
        customerWhatsapp: '+5491222222222'
      })
    ).rejects.toThrow('SLOT_CONFLICT');
  });

  it('HOLD expira: no puede confirmarse', async () => {
    state.reservations.push({
      id: 'r-expired',
      status: 'HOLD',
      holdExpiresAt: new Date(Date.now() - 60_000)
    });

    await expect(mod.confirmReservation('r-expired')).rejects.toThrow('HOLD_EXPIRED');
  });
});

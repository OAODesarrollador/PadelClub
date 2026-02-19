import { PrismaClient } from '../../prisma/generated/client/index.js';
import { PrismaLibSQL } from '@prisma/adapter-libsql';
import { createClient } from '@libsql/client';
import '../config/env.js';

let _instance = null;

function initPrisma() {
  if (_instance) return _instance;

  console.error('[PRISMA_DEBUG] Starting lazy initialization');

  const tursoUrl = (process.env.TURSO_DATABASE_URL || '').trim();
  const dbUrl = (process.env.DATABASE_URL || '').trim();
  const url = tursoUrl || dbUrl;

  const isLibsql = !!url && (url.startsWith('libsql') || url.startsWith('http'));
  console.error(`[PRISMA_DEBUG] urlFound=${!!url}, isLibsql=${isLibsql}, urlPrefix=${url.substring(0, 15)}`);

  if (isLibsql) {
    try {
      // Protect native engine
      process.env.DATABASE_URL = 'file:./dev.db';

      const token = (process.env.TURSO_AUTH_TOKEN || process.env.DATABASE_AUTH_TOKEN || '').trim();
      const client = createClient({ url, authToken: token || undefined });

      _instance = new PrismaClient({
        adapter: new PrismaLibSQL(client)
      });
      console.error('[PRISMA_DEBUG] Created with LibSQL adapter');
    } catch (err) {
      console.error('[PRISMA_DEBUG] Adapter initialization failed:', err);
      _instance = new PrismaClient();
    }
  } else {
    console.error('[PRISMA_DEBUG] Falling back to native Prisma');
    _instance = new PrismaClient();
  }

  return _instance;
}

export const prisma = new Proxy({}, {
  get: (target, prop) => {
    if (prop === '$$typeof' || prop === 'then') return undefined;
    return initPrisma()[prop];
  }
});

export const getPrisma = initPrisma;

import { PrismaClient } from '../../prisma/generated/client/index.js';
import { PrismaLibSQL } from '@prisma/adapter-libsql';
import { createClient } from '@libsql/client';
import '../config/env.js';

function getCleanEnv(key) {
  const v = process.env[key];
  if (typeof v !== 'string') return '';
  const trimmed = v.trim();
  if (trimmed === '' || trimmed === 'undefined' || trimmed === 'null') return '';
  return trimmed;
}

let _instance = null;

function initPrisma() {
  if (_instance) return _instance;

  const tursoUrl = getCleanEnv('TURSO_DATABASE_URL');
  const dbUrl = getCleanEnv('DATABASE_URL');
  const url = tursoUrl || dbUrl;

  const isLibsql = !!url && (url.startsWith('libsql') || url.startsWith('http'));

  if (isLibsql) {
    try {
      const token = getCleanEnv('TURSO_AUTH_TOKEN') || getCleanEnv('DATABASE_AUTH_TOKEN');
      const client = createClient({ url, authToken: token || undefined });

      // We pass the adapter AND the datasource to satisfy Prisma's engine
      _instance = new PrismaClient({
        adapter: new PrismaLibSQL(client),
        datasources: { db: { url: 'file:./dev.db' } }
      });
    } catch (err) {
      console.error('[PRISMA] Adapter init failed:', err);
      _instance = new PrismaClient();
    }
  } else {
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

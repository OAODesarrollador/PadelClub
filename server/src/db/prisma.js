import { PrismaClient } from '../../prisma/generated/client/index.js';
import { PrismaLibSQL } from '@prisma/adapter-libsql';
import { createClient } from '@libsql/client';
import '../config/env.js';

const isVercel = process.env.VERCEL === '1';

function getStrictEnv(key) {
  const v = process.env[key];
  if (typeof v !== 'string' || v.trim() === '' || v === 'undefined' || v === 'null') return null;
  return v.trim();
}

let _prisma = null;

export const getPrisma = () => {
  if (_prisma) return _prisma;

  const tursoUrl = getStrictEnv('TURSO_DATABASE_URL');
  const tursoToken = getStrictEnv('TURSO_AUTH_TOKEN');
  const dbUrl = getStrictEnv('DATABASE_URL');
  const dbToken = getStrictEnv('DATABASE_AUTH_TOKEN');

  const url = tursoUrl || dbUrl;
  const token = tursoToken || dbToken;

  const useLibsql = !!url && (url.startsWith('libsql') || url.startsWith('http'));

  console.log(`[PRISMA] Init request. useLibsql=${useLibsql}, urlFound=${!!url}`);

  if (useLibsql) {
    try {
      console.log(`[PRISMA] Using LibSQL adapter. URL prefix: ${url.substring(0, 15)}...`);

      // Attempt to prevent native engine from seeing the Turso URL
      // We do this by temporary overwriting it with a valid but harmless sqlite path
      // if it exists in the environment.
      if (process.env.DATABASE_URL && process.env.DATABASE_URL.startsWith('libsql')) {
        process.env.DATABASE_URL = 'file:./dev.db';
      }

      const libsql = createClient({
        url: url,
        authToken: token || undefined
      });

      _prisma = new PrismaClient({
        adapter: new PrismaLibSQL(libsql)
      });
      console.log('[PRISMA] Client created with LibSQL adapter.');
      return _prisma;
    } catch (err) {
      console.error('[PRISMA] LibSQL adapter init failed. Falling back.', err);
    }
  }

  console.log('[PRISMA] Using native Prisma Client (sqlite).');
  _prisma = new PrismaClient();
  return _prisma;
};

// Export a proxy or the instance for convenience
export const prisma = new Proxy({}, {
  get: (target, prop) => getPrisma()[prop]
});

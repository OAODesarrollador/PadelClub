import { PrismaClient } from '../../prisma/generated/client/index.js';
import { PrismaLibSQL } from '@prisma/adapter-libsql';
import { createClient } from '@libsql/client';
import '../config/env.js';

// Helper to get clean env vars
function getCleanEnv(key) {
  const val = process.env[key];
  if (!val || val === 'undefined' || val === 'null') return '';
  return String(val).trim();
}

const tursoUrl = getCleanEnv('TURSO_DATABASE_URL');
const tursoToken = getCleanEnv('TURSO_AUTH_TOKEN');
const legacyUrl = getCleanEnv('DATABASE_URL');
const legacyToken = getCleanEnv('DATABASE_AUTH_TOKEN');

const targetUrl = tursoUrl || legacyUrl;
const targetToken = tursoToken || legacyToken;

const useLibsql = targetUrl.startsWith('libsql') || targetUrl.startsWith('http');

console.log(`[PRISMA_INIT] Starting. isLibsql=${useLibsql}, urlFound=${!!targetUrl}`);

export const prisma = (() => {
  if (useLibsql) {
    try {
      // CRITICAL: Prevent Prisma's native engine from trying to parse the URL
      // by removing it from process.env before initialization.
      delete process.env.DATABASE_URL;

      const libsql = createClient({
        url: targetUrl,
        authToken: targetToken || undefined
      });

      return new PrismaClient({
        adapter: new PrismaLibSQL(libsql)
      });
    } catch (e) {
      console.error('[PRISMA_INIT] Failed to initialize LibSQL adapter:', e);
      // Fallback to avoid complete closure-level crash if possible
      return new PrismaClient();
    }
  }
  return new PrismaClient();
})();

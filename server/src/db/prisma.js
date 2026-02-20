import { PrismaClient } from '@prisma/client';
import { PrismaLibSQL } from '@prisma/adapter-libsql';
import { createClient } from '@libsql/client';
import '../config/env.js';

// Configuration
const rawUrl = (process.env.TURSO_DATABASE_URL || process.env.DATABASE_URL || 'file:./dev.db').trim();
const rawToken = (process.env.TURSO_AUTH_TOKEN || process.env.DATABASE_AUTH_TOKEN || '').trim();

// Ensure engine URL is always a simple format for Prisma validation
const engineUrl = 'file:./dev.db';
process.env.DATABASE_URL = engineUrl;

const useLibsql = rawUrl.startsWith('libsql') || rawUrl.startsWith('http');

// Setup LibSQL
export const rawLibsql = createClient({
  url: rawUrl,
  authToken: rawToken || undefined
});

// Setup Prisma
// We instantiate it here but it's safe because engineUrl is simple and adapter is explicit
export const prisma = new PrismaClient({
  adapter: useLibsql ? new PrismaLibSQL(rawLibsql) : null,
  datasources: {
    db: {
      url: engineUrl
    }
  }
});

console.log(`[DB_INIT] Provider: ${useLibsql ? 'LibSQL (Remote)' : 'SQLite (Local fallback)'}`);

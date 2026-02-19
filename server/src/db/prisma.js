import { PrismaClient } from '@prisma/client';
import { PrismaLibSQL } from '@prisma/adapter-libsql';
import { createClient } from '@libsql/client';
import '../config/env.js';

const rawUrl = (process.env.TURSO_DATABASE_URL || process.env.DATABASE_URL || '').trim();
const token = (process.env.TURSO_AUTH_TOKEN || process.env.DATABASE_AUTH_TOKEN || '').trim();

// Use a stable local variable for the REAL connection URL.
const finalUrl = (rawUrl && rawUrl !== 'undefined' && rawUrl !== 'null') ? rawUrl : 'file:./dev.db';
const finalToken = (token && token !== 'undefined' && token !== 'null') ? token : undefined;

// CRITICAL FOR PRISMA ADAPTERS ON VERCEL:
// The Prisma engine (binary) performs validation on DATABASE_URL even when using an adapter.
// It expects a "file:" URL because provider="sqlite". If it sees "libsql://", it throws URL_INVALID.
// Fix: Set the env var to a dummy file path, and use the real URL only in the adapter's client.
process.env.DATABASE_URL = 'file:./dev.db';

console.log(`[DB_INIT] Using Adapter for Turso: ${finalUrl.startsWith('libsql') || finalUrl.startsWith('http')}. Engine URL satisfied.`);

// Direct LibSQL client for the adapter
export const rawLibsql = createClient({
  url: finalUrl,
  authToken: finalToken
});

const useLibsql = finalUrl.startsWith('libsql') || finalUrl.startsWith('http');

// Prisma setup
export const prisma = useLibsql
  ? new PrismaClient({ adapter: new PrismaLibSQL(rawLibsql) })
  : new PrismaClient();

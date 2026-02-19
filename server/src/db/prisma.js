import { PrismaClient } from '@prisma/client';
import { PrismaLibSQL } from '@prisma/adapter-libsql';
import { createClient } from '@libsql/client';
import '../config/env.js';

const rawUrl = (process.env.TURSO_DATABASE_URL || process.env.DATABASE_URL || '').trim();
const token = (process.env.TURSO_AUTH_TOKEN || process.env.DATABASE_AUTH_TOKEN || '').trim();

// Use a stable local variable for the URL to avoid issues with process.env mutation in some environments
const finalUrl = rawUrl || 'file:./dev.db';

// CRITICAL: Prisma internal validation might still need DATABASE_URL in process.env if not using adapter
// but here we ARE using an adapter. However, we set it just in case some part of the engine checks it.
process.env.DATABASE_URL = finalUrl;

// Direct LibSQL client for "Raw" queries as fallback
export const rawLibsql = createClient({
  url: finalUrl,
  authToken: token || undefined
});

// Prisma setup
const useLibsql = finalUrl.startsWith('libsql') || finalUrl.startsWith('http');

export const prisma = useLibsql
  ? new PrismaClient({ adapter: new PrismaLibSQL(rawLibsql) })
  : new PrismaClient();

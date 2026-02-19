import { PrismaClient } from '@prisma/client';
import { PrismaLibSQL } from '@prisma/adapter-libsql';
import { createClient } from '@libsql/client';
import '../config/env.js';

const rawUrl = (process.env.TURSO_DATABASE_URL || process.env.DATABASE_URL || '').trim();
const token = (process.env.TURSO_AUTH_TOKEN || process.env.DATABASE_AUTH_TOKEN || '').trim();

// CRITICAL: Prisma internal validation often requires DATABASE_URL in the process environment 
// even when using a driver adapter. We set it early to satisfy this.
if (rawUrl) {
  process.env.DATABASE_URL = rawUrl;
} else {
  // Fallback to local dev db if nothing is set, to at least prevent crash on undefined
  process.env.DATABASE_URL = 'file:./dev.db';
}

// Direct LibSQL client for "Raw" queries as fallback
export const rawLibsql = createClient({
  url: process.env.DATABASE_URL,
  authToken: token || undefined
});

// Prisma setup
const useLibsql = process.env.DATABASE_URL.startsWith('libsql') || process.env.DATABASE_URL.startsWith('http');

export const prisma = useLibsql
  ? new PrismaClient({ adapter: new PrismaLibSQL(rawLibsql) })
  : new PrismaClient();

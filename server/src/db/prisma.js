import { PrismaClient } from '@prisma/client';
import { PrismaLibSQL } from '@prisma/adapter-libsql';
import { createClient } from '@libsql/client';
import '../config/env.js';

const url = (process.env.TURSO_DATABASE_URL || process.env.DATABASE_URL || '').trim();
const token = (process.env.TURSO_AUTH_TOKEN || process.env.DATABASE_AUTH_TOKEN || '').trim();

// Direct LibSQL client for "Raw" queries as fallback
export const rawLibsql = createClient({
  url: url,
  authToken: token || undefined
});

// Prisma setup
const useLibsql = url.startsWith('libsql') || url.startsWith('http');

// Satisfy Prisma validation by ensuring DATABASE_URL is set in environment if using adapter
if (useLibsql && url) {
  process.env.DATABASE_URL = url;
}

export const prisma = useLibsql
  ? new PrismaClient({ adapter: new PrismaLibSQL(rawLibsql) })
  : new PrismaClient();

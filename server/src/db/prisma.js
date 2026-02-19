import { PrismaClient } from '@prisma/client';
import { PrismaLibSQL } from '@prisma/adapter-libsql';
import { createClient } from '@libsql/client';
import '../config/env.js';

const url = (process.env.TURSO_DATABASE_URL || process.env.DATABASE_URL || '').trim();
const token = (process.env.TURSO_AUTH_TOKEN || process.env.DATABASE_AUTH_TOKEN || '').trim();

// CRITICAL: Prevent Prisma engine from seeing potentially invalid/conflicting env vars
delete process.env.DATABASE_URL;
delete process.env.DATABASE_AUTH_TOKEN;

// Direct LibSQL client for "Raw" queries as fallback
export const rawLibsql = createClient({
  url: url,
  authToken: token || undefined
});

// Prisma setup
const useLibsql = url.startsWith('libsql') || url.startsWith('http');

export const prisma = useLibsql
  ? new PrismaClient({ adapter: new PrismaLibSQL(rawLibsql) })
  : new PrismaClient();

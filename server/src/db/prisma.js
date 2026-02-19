import { PrismaClient } from '@prisma/client';
import { PrismaLibSQL } from '@prisma/adapter-libsql';
import { createClient } from '@libsql/client';
import '../config/env.js';

const rawUrl = (process.env.TURSO_DATABASE_URL || process.env.DATABASE_URL || '').trim();
const token = (process.env.TURSO_AUTH_TOKEN || process.env.DATABASE_AUTH_TOKEN || '').trim();

// Use a stable local variable for the URL. Defensively check for "undefined" string.
const finalUrl = (rawUrl && rawUrl !== 'undefined') ? rawUrl : 'file:./dev.db';

// Ensure the environment variable is EXACTLY what we want for Prisma's internal validation
process.env.DATABASE_URL = finalUrl;

// Direct LibSQL client for "Raw" queries as fallback
export const rawLibsql = createClient({
  url: finalUrl,
  authToken: token && token !== 'undefined' ? token : undefined
});

// Prisma setup
const useLibsql = finalUrl.startsWith('libsql') || finalUrl.startsWith('http');

export const prisma = useLibsql
  ? new PrismaClient({
    adapter: new PrismaLibSQL(rawLibsql),
    datasources: { db: { url: finalUrl } }
  })
  : new PrismaClient();

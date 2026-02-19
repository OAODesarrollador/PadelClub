import { PrismaClient } from '@prisma/client';
import { PrismaLibSQL } from '@prisma/adapter-libsql';
import { createClient } from '@libsql/client';
import '../config/env.js';

function getStrictEnv(key) {
  const v = process.env[key];
  if (typeof v !== 'string' || v.trim() === '' || v === 'undefined' || v === 'null') return '';
  return v.trim();
}

const tursoUrl = getStrictEnv('TURSO_DATABASE_URL');
const tursoToken = getStrictEnv('TURSO_AUTH_TOKEN');
const dbUrl = getStrictEnv('DATABASE_URL');
const dbToken = getStrictEnv('DATABASE_AUTH_TOKEN');

const url = tursoUrl || dbUrl;
const token = tursoToken || dbToken;

const isLibsql = !!url && (url.startsWith('libsql') || url.startsWith('http'));

// CRITICAL: Ensure Prisma's engine always sees a valid SQLite URL
// regardless of whether we use the adapter or not.
if (!process.env.DATABASE_URL || process.env.DATABASE_URL.startsWith('libsql')) {
  process.env.DATABASE_URL = 'file:./dev.db';
}

let prismaInstance;

if (isLibsql) {
  console.log('[PRISMA_INIT] Using LibSQL adapter');
  const client = createClient({ url, authToken: token || undefined });
  prismaInstance = new PrismaClient({
    adapter: new PrismaLibSQL(client)
  });
} else {
  console.log('[PRISMA_INIT] Using native SQLite');
  prismaInstance = new PrismaClient();
}

export const prisma = prismaInstance;
export const getPrisma = () => prismaInstance;

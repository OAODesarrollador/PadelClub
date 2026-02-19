import { PrismaClient } from '../../prisma/generated/client/index.js';
import { PrismaLibSQL } from '@prisma/adapter-libsql';
import { createClient } from '@libsql/client';
import '../config/env.js';

const tursoUrl = (process.env.TURSO_DATABASE_URL || '').trim();
const tursoToken = (process.env.TURSO_AUTH_TOKEN || '').trim();
const dbUrl = (process.env.DATABASE_URL || '').trim();
const dbToken = (process.env.DATABASE_AUTH_TOKEN || '').trim();

const url = tursoUrl || dbUrl;
const token = tursoToken || dbToken;

const isLibsql = !!url && (url.startsWith('libsql') || url.startsWith('http'));

// If using LibSQL, we MUST prevent Prisma's native engine from seeing the invalid URL
if (isLibsql) {
  process.env.DATABASE_URL = 'file:./dev.db';
}

let prismaInstance;

if (isLibsql) {
  console.log('[PRISMA_INIT] Initializing with LibSQL Adapter');
  const libsql = createClient({
    url: url,
    authToken: token || undefined
  });
  prismaInstance = new PrismaClient({
    adapter: new PrismaLibSQL(libsql)
  });
} else {
  console.log('[PRISMA_INIT] Initializing with Native SQLite');
  prismaInstance = new PrismaClient();
}

export const prisma = prismaInstance;
export const getPrisma = () => prismaInstance;

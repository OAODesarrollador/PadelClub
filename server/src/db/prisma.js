import { PrismaClient } from '@prisma/client';
import { PrismaLibSQL } from '@prisma/adapter-libsql';
import { createClient } from '@libsql/client';
import '../config/env.js';

function getStrictEnv(key) {
  const v = process.env[key];
  if (typeof v !== 'string' || v.trim() === '' || v === 'undefined' || v === 'null') return '';
  return v.trim();
}

const url = getStrictEnv('TURSO_DATABASE_URL') || getStrictEnv('DATABASE_URL');
const token = getStrictEnv('TURSO_AUTH_TOKEN') || getStrictEnv('DATABASE_AUTH_TOKEN');

const isLibsql = !!url && (url.startsWith('libsql') || url.startsWith('http'));

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

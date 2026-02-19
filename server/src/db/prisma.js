import { PrismaClient } from '../../prisma/generated/client/index.js';
import { PrismaLibSQL } from '@prisma/adapter-libsql';
import { createClient } from '@libsql/client';
import '../config/env.js';

const databaseUrl = process.env.TURSO_DATABASE_URL || process.env.DATABASE_URL || '';
const databaseAuthToken = process.env.TURSO_AUTH_TOKEN || process.env.DATABASE_AUTH_TOKEN || undefined;

const useLibsql =
  databaseUrl.startsWith('libsql://') ||
  databaseUrl.startsWith('http://') ||
  databaseUrl.startsWith('https://');

if (process.env.NODE_ENV === 'production' || useLibsql) {
  console.log(`Prisma Init: useLibsql=${useLibsql}, urlLength=${databaseUrl.length}, hasToken=${!!databaseAuthToken}`);
  if (useLibsql && databaseUrl.length < 10) {
    console.error(`Prisma Init Error: databaseUrl is suspiciously short: "${databaseUrl}"`);
  }
}

export const prisma = useLibsql
  ? (() => {
    try {
      const libsql = createClient({
        url: databaseUrl,
        authToken: databaseAuthToken
      });
      return new PrismaClient({
        adapter: new PrismaLibSQL(libsql)
      });
    } catch (e) {
      console.error('Failed to initialize Prisma with LibSQL adapter:', e);
      throw e;
    }
  })()
  : new PrismaClient();

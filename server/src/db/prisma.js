import { PrismaClient } from '@prisma/client';
import { PrismaLibSQL } from '@prisma/adapter-libsql';
import { createClient } from '@libsql/client';
import '../config/env.js';

const databaseUrl = process.env.DATABASE_URL || '';
const databaseAuthToken = process.env.DATABASE_AUTH_TOKEN || undefined;

const useLibsql =
  databaseUrl.startsWith('libsql://') ||
  databaseUrl.startsWith('http://') ||
  databaseUrl.startsWith('https://');

export const prisma = useLibsql
  ? (() => {
    const libsql = createClient({
      url: databaseUrl,
      authToken: databaseAuthToken
    });
    return new PrismaClient({
      adapter: new PrismaLibSQL(libsql)
    });
  })()
  : new PrismaClient();

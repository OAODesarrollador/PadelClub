import { PrismaClient } from '@prisma/client';
import { PrismaLibSQL } from '@prisma/adapter-libsql';
import '../config/env.js';

const databaseUrl = process.env.DATABASE_URL || '';
const databaseAuthToken = process.env.DATABASE_AUTH_TOKEN || undefined;

const useLibsql =
  databaseUrl.startsWith('libsql://') ||
  databaseUrl.startsWith('http://') ||
  databaseUrl.startsWith('https://');

export const prisma = useLibsql
  ? new PrismaClient({
      adapter: new PrismaLibSQL({
        url: databaseUrl,
        authToken: databaseAuthToken
      })
    })
  : new PrismaClient();

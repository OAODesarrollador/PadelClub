import { PrismaClient } from '@prisma/client';
import { PrismaLibSQL } from '@prisma/adapter-libsql';
import { createClient } from '@libsql/client';
import '../config/env.js';

const rawUrl = (process.env.TURSO_DATABASE_URL || process.env.DATABASE_URL || '').trim();
const rawToken = (process.env.TURSO_AUTH_TOKEN || process.env.DATABASE_AUTH_TOKEN || '').trim();

// 1. Resolve TRUE connection details for the adapter
const libSqlUrl = (rawUrl && rawUrl !== 'undefined' && rawUrl !== 'null') ? rawUrl : 'file:./dev.db';
const libSqlToken = (rawToken && rawToken !== 'undefined' && rawToken !== 'null') ? rawToken : undefined;

// 2. Resolve DUMMY URL for Prisma engine validation (binary engine MUST see a file: URL for sqlite provider)
const engineUrl = 'file:./dev.db';

// 3. Force environment variable for the engine
process.env.DATABASE_URL = engineUrl;

console.log(`[DB_INIT] Engine URL: ${engineUrl}`);
console.log(`[DB_INIT] Adapter URL: ${libSqlUrl.substring(0, 20)}...`);
console.log(`[DB_INIT] Using LibSQL Adapter: ${libSqlUrl.startsWith('libsql') || libSqlUrl.startsWith('http')}`);

// 4. Create LibSQL client
export const rawLibsql = createClient({
  url: libSqlUrl,
  authToken: libSqlToken
});

const useLibsql = libSqlUrl.startsWith('libsql') || libSqlUrl.startsWith('http');

// 5. Create Prisma Client with EXPLICIT datasource override
export const prisma = new PrismaClient({
  adapter: useLibsql ? new PrismaLibSQL(rawLibsql) : undefined,
  datasources: {
    db: {
      url: engineUrl // Categorical fix: satisfy engine with hardcoded valid file URL
    }
  }
});

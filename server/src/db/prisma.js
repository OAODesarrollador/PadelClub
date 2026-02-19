import { PrismaClient } from '@prisma/client';
import { PrismaLibSQL } from '@prisma/adapter-libsql';
import { createClient } from '@libsql/client';
import path from 'path';
import { fileURLToPath } from 'url';
import '../config/env.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const defaultLocalDbPath = path.resolve(__dirname, '../../prisma/dev.db');
const localDbUrl = `file:${defaultLocalDbPath}`;

const rawUrl = (process.env.TURSO_DATABASE_URL || process.env.DATABASE_URL || '').trim();
const rawToken = (process.env.TURSO_AUTH_TOKEN || process.env.DATABASE_AUTH_TOKEN || '').trim();

// Normalize libSqlUrl if it's a local file to ensure absolute path
let libSqlUrl = (rawUrl && rawUrl !== 'undefined' && rawUrl !== 'null') ? rawUrl : localDbUrl;
if (libSqlUrl.startsWith('file:')) {
  const filePath = libSqlUrl.replace('file:', '');
  if (!path.isAbsolute(filePath)) {
    libSqlUrl = `file:${path.resolve(process.cwd(), filePath)}`;
  }
}
const libSqlToken = (rawToken && rawToken !== 'undefined' && rawToken !== 'null') ? rawToken : undefined;

// 2. Resolve DUMMY URL for Prisma engine validation (binary engine MUST see a file: URL for sqlite provider)
const engineUrl = localDbUrl;

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
  adapter: useLibsql ? new PrismaLibSQL(rawLibsql) : null,
  datasources: {
    db: {
      url: engineUrl // Categorical fix: satisfy engine with hardcoded valid file URL
    }
  }
});

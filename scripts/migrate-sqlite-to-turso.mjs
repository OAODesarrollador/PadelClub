import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { createClient } from '@libsql/client';

const dbUrl = process.env.TURSO_DATABASE_URL;
const authToken = process.env.TURSO_AUTH_TOKEN;
const sqlitePath = process.env.SQLITE_PATH || path.resolve('server', 'prisma', 'dev.db');

if (!dbUrl || !authToken) {
  console.error('Missing TURSO_DATABASE_URL or TURSO_AUTH_TOKEN.');
  process.exit(1);
}

function sqliteQuery(sql) {
  return execFileSync('sqlite3', [sqlitePath, sql], { encoding: 'utf8' }).trim();
}

function sqliteQueryJson(sql) {
  const out = execFileSync('sqlite3', ['-json', sqlitePath, sql], { encoding: 'utf8' }).trim();
  if (!out) return [];
  return JSON.parse(out);
}

function qid(name) {
  return `"${String(name).replaceAll('"', '""')}"`;
}

function qstr(value) {
  return `'${String(value).replaceAll("'", "''")}'`;
}

function tableNames() {
  const rows = sqliteQueryJson(`
    SELECT name
    FROM sqlite_master
    WHERE type = 'table'
      AND name NOT LIKE 'sqlite_%'
    ORDER BY CASE name WHEN '_prisma_migrations' THEN 0 ELSE 1 END, name
  `);
  return rows.map((r) => r.name);
}

function createTableSql(name) {
  return sqliteQuery(`SELECT sql FROM sqlite_master WHERE type='table' AND name=${qstr(name)};`);
}

function createIndexSqls() {
  const rows = sqliteQueryJson(`
    SELECT sql
    FROM sqlite_master
    WHERE type = 'index'
      AND sql IS NOT NULL
      AND name NOT LIKE 'sqlite_%'
    ORDER BY name
  `);
  return rows.map((r) => r.sql).filter(Boolean);
}

function rowsForTable(name) {
  return sqliteQueryJson(`SELECT * FROM ${qid(name)};`);
}

async function run() {
  const client = createClient({ url: dbUrl, authToken });
  const tables = tableNames();
  const indexSqls = createIndexSqls();

  console.log(`SQLite source: ${sqlitePath}`);
  console.log(`Tables found: ${tables.length}`);

  await client.execute('PRAGMA foreign_keys = OFF;');

  for (const name of [...tables].reverse()) {
    await client.execute(`DROP TABLE IF EXISTS ${qid(name)};`);
  }

  for (const name of tables) {
    const ddl = createTableSql(name);
    if (!ddl) continue;
    await client.execute(ddl);
  }

  for (const name of tables) {
    const rows = rowsForTable(name);
    if (!rows.length) continue;

    const columns = Object.keys(rows[0]);
    const columnList = columns.map((c) => qid(c)).join(', ');
    const placeholders = columns.map(() => '?').join(', ');
    const sql = `INSERT INTO ${qid(name)} (${columnList}) VALUES (${placeholders})`;

    for (const row of rows) {
      await client.execute({
        sql,
        args: columns.map((c) => row[c] ?? null)
      });
    }

    console.log(`Copied ${rows.length} row(s) -> ${name}`);
  }

  for (const indexSql of indexSqls) {
    await client.execute(indexSql);
  }

  await client.execute('PRAGMA foreign_keys = ON;');
  console.log('Migration completed successfully.');
}

run().catch((err) => {
  console.error('Migration failed:', err?.message || err);
  process.exit(1);
});

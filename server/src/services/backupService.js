import fs from 'fs';
import path from 'path';

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

export function createBackup({ baseDir, sqlitePath, exportJson }) {
  ensureDir(baseDir);
  const stamp = new Date().toISOString().replace(/[:.]/g, '-');
  const backupDir = path.join(baseDir, `backup-${stamp}`);
  ensureDir(backupDir);

  if (sqlitePath && fs.existsSync(sqlitePath)) {
    fs.copyFileSync(sqlitePath, path.join(backupDir, 'database.sqlite'));
  }

  fs.writeFileSync(path.join(backupDir, 'export.json'), JSON.stringify(exportJson, null, 2));
  fs.writeFileSync(path.join(backupDir, 'meta.json'), JSON.stringify({ appVersion: '1.0.0', createdAt: new Date().toISOString() }, null, 2));

  return backupDir;
}

export function listBackups(baseDir) {
  ensureDir(baseDir);
  return fs.readdirSync(baseDir).filter((name) => name.startsWith('backup-')).sort().reverse();
}

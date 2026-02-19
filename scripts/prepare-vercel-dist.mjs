import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const src = path.join(root, 'client', 'dist');
const dest = path.join(root, 'dist');

if (!fs.existsSync(src)) {
  console.error(`Missing build output: ${src}`);
  process.exit(1);
}

fs.rmSync(dest, { recursive: true, force: true });
fs.cpSync(src, dest, { recursive: true });
console.log(`Prepared Vercel output directory: ${dest}`);


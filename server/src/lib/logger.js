import pino from 'pino';
import pinoHttp from 'pino-http';
import { createStream } from 'rotating-file-stream';
import fs from 'fs';
import path from 'path';

const isVercel = process.env.VERCEL === '1';

let stream;
if (isVercel) {
  // On Vercel, we only log to stdout
  stream = process.stdout;
} else {
  const logsDir = path.resolve(process.cwd(), 'logs');
  if (!fs.existsSync(logsDir)) fs.mkdirSync(logsDir, { recursive: true });

  stream = createStream('app.log', {
    size: '10M',
    interval: '1d',
    path: logsDir,
    compress: 'gzip'
  });
}

export const logger = pino({}, stream);
export const httpLogger = pinoHttp({ logger });

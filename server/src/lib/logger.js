import pino from 'pino';
import pinoHttp from 'pino-http';
import { createStream } from 'rotating-file-stream';
import fs from 'fs';
import path from 'path';

const logsDir = path.resolve(process.cwd(), 'logs');
if (!fs.existsSync(logsDir)) fs.mkdirSync(logsDir, { recursive: true });

const stream = createStream('app.log', {
  size: '10M',
  interval: '1d',
  path: logsDir,
  compress: 'gzip'
});

export const logger = pino({}, stream);
export const httpLogger = pinoHttp({ logger });

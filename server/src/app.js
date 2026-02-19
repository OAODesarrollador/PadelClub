import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import swaggerUi from 'swagger-ui-express';
import fs from 'fs';
import path from 'path';
import publicRoutes from './modules/public/routes.js';
import adminRoutes from './modules/admin/routes.js';
import { env } from './config/env.js';
import { httpLogger } from './lib/logger.js';
import { openApiSpec } from './swagger/openapi.js';

export function buildApp() {
  const app = express();
  app.use(helmet());
  app.use(cors({ origin: env.clientUrl }));
  app.use(express.json({ limit: '1mb' }));
  app.use(httpLogger);

  app.get('/health', (_req, res) => res.json({ ok: true }));
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openApiSpec));
  app.use('/public', publicRoutes);
  app.use('/admin', adminRoutes);

  // On Vercel, process.cwd() is the project root. Build script moves client/dist to /dist.
  // Locally, if running from server folder, client is at ../client/dist.
  const possiblePaths = [
    path.join(process.cwd(), 'dist'), // Vercel / Root
    path.join(process.cwd(), '..', 'client', 'dist'), // Local root
    path.join(process.cwd(), 'client', 'dist') // Alternative
  ];

  const clientDist = possiblePaths.find(p => fs.existsSync(p));

  if (clientDist) {
    app.use(express.static(clientDist));
    app.get('*', (req, res, next) => {
      if (req.path.startsWith('/public') || req.path.startsWith('/admin') || req.path.startsWith('/api-docs') || req.path === '/health') {
        return next();
      }
      return res.sendFile(path.join(clientDist, 'index.html'));
    });
  }

  app.use((err, _req, res, _next) => {
    console.error(err);
    res.status(500).json({
      error: 'INTERNAL_ERROR',
      message: err.message,
      code: err.code
    });
  });

  return app;
}

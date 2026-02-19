import { buildApp } from '../server/src/app.js';

let app;
try {
  app = buildApp();
} catch (e) {
  console.error('Error during buildApp initialization:', e);
}

export default function handler(req, res) {
  if (!app) {
    return res.status(500).json({
      error: 'BOOT_ERROR',
      message: 'The application failed to initialize during startup.'
    });
  }
  return app(req, res);
}


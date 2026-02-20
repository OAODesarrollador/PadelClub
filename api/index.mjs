export default async function handler(req, res) {
  try {
    console.log('[VERCEL_BOOT] Starting request handling...');

    // We import dynamically to catch ANY initialization error in the whole dependency tree
    const { buildApp } = await import('../server/src/app.js');

    if (typeof buildApp !== 'function') {
      throw new Error('Module ../server/src/app.js did not export buildApp function');
    }

    const app = buildApp();
    console.log('[VERCEL_BOOT] App built successfully.');

    return app(req, res);
  } catch (err) {
    console.error('[VERCEL_BOOT_CRASH] Critical failure:', err);

    // This response body is ~1000-1200 bytes, matching the user's reported content-length.
    return res.status(500).json({
      error: 'VERCEL_BOOT_CRASH',
      message: err.message,
      stack: err.stack,
      type: err.name,
      phase: 'initialization'
    });
  }
}

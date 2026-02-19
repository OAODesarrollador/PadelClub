let cachedApp = null;

export default async function handler(req, res) {
  try {
    if (!cachedApp) {
      console.log('[VERCEL_INIT] Loading application modules...');
      // Dynamic import to catch top-level initialization errors in app.js or its dependencies
      const { app, buildApp } = await import('../server/src/app.js');

      // If the app is already exported, use it. Otherwise, build it.
      cachedApp = app || (typeof buildApp === 'function' ? buildApp() : null);

      if (!cachedApp) {
        throw new Error('Neither "app" nor "buildApp" were exported from app.js');
      }

      console.log('[VERCEL_INIT] Application loaded successfully.');
    }
    return cachedApp(req, res);
  } catch (err) {
    console.error('[VERCEL_CRASH] Failed to initialize application:', err);
    res.status(500).json({
      error: 'VERCEL_INIT_CRASH',
      message: err.message,
      stack: err.stack,
      hint: 'This error occurred during the serverless function initialization (module loading phase). Check environment variables.'
    });
  }
}

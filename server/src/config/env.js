import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

const cwdEnvPath = path.resolve(process.cwd(), '.env');
const workspaceServerEnvPath = path.resolve(process.cwd(), 'server', '.env');
const envPath = fs.existsSync(cwdEnvPath) ? cwdEnvPath : workspaceServerEnvPath;
dotenv.config({ path: envPath });

function detectMpCredentialMode(value) {
  const v = String(value || '').trim();
  if (!v) return 'missing';
  if (v.startsWith('TEST-')) return 'test';
  if (v.startsWith('APP_USR-')) return 'live';
  return 'unknown';
}

export const env = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: Number(process.env.APP_PORT || 4000),
  clientUrl: process.env.CLIENT_URL || 'http://localhost:5173',
  dbProvider: process.env.DB_PROVIDER || 'sqlite',
  dbAuthToken: process.env.DATABASE_AUTH_TOKEN,
  holdMinutes: Number(process.env.HOLD_MINUTES || 7),
  jwtAccessSecret: process.env.JWT_ACCESS_SECRET || 'dev-access',
  jwtRefreshSecret: process.env.JWT_REFRESH_SECRET || 'dev-refresh',
  accessTokenTtl: process.env.ACCESS_TOKEN_TTL || '15m',
  refreshTokenTtl: process.env.REFRESH_TOKEN_TTL || '7d',
  licenseSecret: process.env.LICENSE_SECRET || 'dev-license',
  communityBuild: process.env.COMMUNITY_BUILD === 'true',
  mpPublicKey: process.env.MP_PUBLIC_KEY || 'TEST-d05598fb-c3ce-42c1-af19-0cb1bf8f6e4e',
  mpAccessToken: process.env.MP_ACCESS_TOKEN || 'TEST-2311301713682112-021800-249fb393dbc95cb4cc8e8a5d00cc8fcf-291765832',
  appBaseUrl: process.env.APP_BASE_URL || process.env.CLIENT_URL || 'http://localhost:5173'
};

const mpPkMode = detectMpCredentialMode(env.mpPublicKey);
const mpAtMode = detectMpCredentialMode(env.mpAccessToken);

const bothSet = mpPkMode !== 'missing' && mpAtMode !== 'missing';
const oneMissing = (mpPkMode === 'missing') !== (mpAtMode === 'missing');
if (oneMissing) {
  throw new Error(
    `Mercado Pago config invalid: both MP_PUBLIC_KEY and MP_ACCESS_TOKEN must be set together. Detected mpPublicKey=${mpPkMode}, mpAccessToken=${mpAtMode}.`
  );
}

if (bothSet && (mpPkMode === 'unknown' || mpAtMode === 'unknown')) {
  throw new Error(
    `Mercado Pago config invalid: unsupported credential format. Expected TEST-* or APP_USR-*. Detected mpPublicKey=${mpPkMode}, mpAccessToken=${mpAtMode}.`
  );
}

if (bothSet && mpPkMode !== mpAtMode) {
  throw new Error(
    `Mercado Pago config invalid: mixed environments. MP_PUBLIC_KEY is ${mpPkMode} and MP_ACCESS_TOKEN is ${mpAtMode}. Use both TEST or both LIVE.`
  );
}

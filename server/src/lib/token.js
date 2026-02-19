import crypto from 'crypto';

export function randomManageToken() {
  return crypto.randomBytes(32).toString('base64url');
}

export function hashManageToken(token) {
  return crypto.createHash('sha256').update(token).digest('hex');
}

export function timingSafeEqualHash(a, b) {
  const aa = Buffer.from(a);
  const bb = Buffer.from(b);
  if (aa.length !== bb.length) return false;
  return crypto.timingSafeEqual(aa, bb);
}

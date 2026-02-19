import fs from 'fs';
import path from 'path';
import os from 'os';
import crypto from 'crypto';
import { env } from '../config/env.js';

export function machineFingerprint() {
  const raw = `${os.hostname()}|${os.platform()}|${os.arch()}|${os.cpus().length}`;
  return crypto.createHash('sha256').update(raw).digest('hex');
}

export function signLicensePayload(payload) {
  const body = Buffer.from(JSON.stringify(payload)).toString('base64url');
  const sig = crypto.createHmac('sha256', env.licenseSecret).update(body).digest('base64url');
  return `${body}.${sig}`;
}

export function verifyLicenseKey(licenseKey) {
  const [body, sig] = licenseKey.split('.');
  if (!body || !sig) return { valid: false };
  const expected = crypto.createHmac('sha256', env.licenseSecret).update(body).digest('base64url');
  if (sig !== expected) return { valid: false };
  const payload = JSON.parse(Buffer.from(body, 'base64url').toString('utf8'));
  return { valid: true, payload };
}

export function writeLicenseDiagnostic(filePath) {
  const report = {
    machineHash: machineFingerprint(),
    generatedAt: new Date().toISOString()
  };
  fs.writeFileSync(filePath, JSON.stringify(report, null, 2));
  return report;
}

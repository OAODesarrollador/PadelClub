import { describe, it, expect } from 'vitest';
import { requireRole } from '../src/middleware/auth.js';

describe('RBAC', () => {
  it('secretario no puede editar licencia/reglas; admin si', async () => {
    const mw = requireRole('ADMIN');

    const reqSecretary = { user: { role: 'SECRETARIO' } };
    const reqAdmin = { user: { role: 'ADMIN' } };

    const resForbidden = {
      statusCode: 200,
      body: null,
      status(code) {
        this.statusCode = code;
        return this;
      },
      json(payload) {
        this.body = payload;
        return this;
      }
    };

    let calledSecretary = false;
    mw(reqSecretary, resForbidden, () => {
      calledSecretary = true;
    });

    expect(calledSecretary).toBe(false);
    expect(resForbidden.statusCode).toBe(403);

    const resAdmin = { ...resForbidden, statusCode: 200, body: null };
    let calledAdmin = false;
    mw(reqAdmin, resAdmin, () => {
      calledAdmin = true;
    });

    expect(calledAdmin).toBe(true);
  });
});

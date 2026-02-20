import { createClient } from '@libsql/client';
import '../config/env.js';

const rawUrl = (process.env.TURSO_DATABASE_URL || process.env.DATABASE_URL || 'file:local.db').trim();
const rawToken = (process.env.TURSO_AUTH_TOKEN || process.env.DATABASE_AUTH_TOKEN || '').trim();

export const client = createClient({
    url: rawUrl,
    authToken: rawToken || undefined
});

/**
 * Standardized database interface using raw SQL
 */
export const db = {
    async execute(sql, args) {
        return await client.execute({ sql, args });
    },

    async query(sql, args) {
        const rs = await client.execute({ sql, args });
        return rs.rows;
    },

    async queryFirst(sql, args) {
        const rs = await client.execute({ sql, args });
        return rs.rows[0] || null;
    },

    /**
     * Simple transaction wrapper
     */
    async transaction(callback) {
        const tx = await client.transaction('write');
        try {
            const result = await callback(tx);
            await tx.commit();
            return result;
        } catch (err) {
            await tx.rollback();
            throw err;
        }
    }
};

console.log(`[DB_INIT] Using Raw LibSQL client (${rawUrl.startsWith('libsql') ? 'Remote' : 'Local'})`);

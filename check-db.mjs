import { db } from './server/src/db/db.js';

async function check() {
    try {
        console.log('--- Checking Club Table ---');
        const clubInfo = await db.query("PRAGMA table_info('Club')");
        console.log(JSON.stringify(clubInfo, null, 2));

        console.log('\n--- Checking Court Table ---');
        const courtInfo = await db.query("PRAGMA table_info('Court')");
        console.log(JSON.stringify(courtInfo, null, 2));

        console.log('\n--- Checking Reservation Table ---');
        const resInfo = await db.query("PRAGMA table_info('Reservation')");
        console.log(JSON.stringify(resInfo, null, 2));

        process.exit(0);
    } catch (err) {
        console.error('FAILED:', err);
        process.exit(1);
    }
}

check();

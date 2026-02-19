import cron from 'node-cron';
import { cleanupExpiredHolds } from '../services/reservationService.js';
import { logger } from '../lib/logger.js';

export function startJobs() {
  cron.schedule('* * * * *', async () => {
    const count = await cleanupExpiredHolds();
    if (count > 0) logger.info({ count }, 'Expired HOLD reservations cleaned');
  });
}

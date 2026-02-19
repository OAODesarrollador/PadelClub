import { buildApp } from './app.js';
import { env } from './config/env.js';
import { startJobs } from './jobs/holdCleanupJob.js';

const app = buildApp();

app.listen(env.port, () => {
  console.log(`Server running on http://localhost:${env.port}`);
  startJobs();
});

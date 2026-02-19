#!/usr/bin/env bash
set -euo pipefail
[ -f server/.env ] || cp server/.env.example server/.env
npm install
(
  cd server
  npx prisma migrate deploy || npx prisma migrate dev --name init
  npm run seed
  npm run start
) &
(
  cd client
  npm run dev
)

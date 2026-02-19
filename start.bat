@echo off
if not exist server\.env copy server\.env.example server\.env
npm install
cd server
npx prisma migrate deploy || npx prisma migrate dev --name init
npm run seed
start cmd /k "npm run start"
cd ..\client
start cmd /k "npm run dev"

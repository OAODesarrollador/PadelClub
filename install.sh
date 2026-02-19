#!/usr/bin/env bash
set -euo pipefail

echo "Verificando Docker..."
command -v docker >/dev/null 2>&1 || { echo "Docker no encontrado"; exit 1; }

if [ ! -f server/.env ]; then
  cp server/.env.example server/.env
fi

echo "Levantando contenedores..."
docker compose up -d --build

echo "Aplicando migraciones y seed..."
docker compose exec server sh -lc "npx prisma migrate deploy || npx prisma migrate dev --name init"
docker compose exec server sh -lc "npm run seed"

echo "Asistente inicial completo"
if command -v xdg-open >/dev/null 2>&1; then xdg-open http://localhost:4173; fi
if command -v open >/dev/null 2>&1; then open http://localhost:4173; fi

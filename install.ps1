param()

$ErrorActionPreference = 'Stop'

Write-Host 'Verificando Docker...'
$dockerOk = Get-Command docker -ErrorAction SilentlyContinue
if (-not $dockerOk) { throw 'Docker no está instalado.' }

if (-not (Test-Path 'server/.env')) {
  Copy-Item 'server/.env.example' 'server/.env'
}

Write-Host 'Levantando contenedores...'
docker compose up -d --build

Write-Host 'Aplicando migraciones y seed...'
docker compose exec server sh -lc "npx prisma migrate deploy || npx prisma migrate dev --name init"
docker compose exec server sh -lc "npm run seed"

Write-Host 'Asistente inicial completo.'
Start-Process 'http://localhost:4173'

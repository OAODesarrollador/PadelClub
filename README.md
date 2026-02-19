# ClubPaddle (Offline-First)

Sistema completo de reservas de canchas de pádel para vender e instalar en clubes.

## Instalación rápida (Windows)

1. Instalar Docker Desktop.
2. Abrir PowerShell en esta carpeta.
3. Ejecutar:

```powershell
./install.ps1
```

Listo. Se levanta todo y abre `http://localhost:4173`.

## Instalación rápida (Linux/Mac)

```bash
chmod +x install.sh
./install.sh
```

## Accesos

- Sitio público: `http://localhost:4173`
- Admin login: `http://localhost:4173/admin/login`
- API Swagger: `http://localhost:4000/api-docs`

Credenciales iniciales:
- Admin: `admin@club.local` / `admin1234`
- Secretario: `secretario@club.local` / `admin1234`

## Flujo público (sin login)

- Reservar en `/reservar`
- Confirmación en `/confirmacion/:id`
- Gestión por token en `/gestionar?token=...`

## Backups

Desde admin configuración, botón "Crear backup".

También por script:
- Windows: `./scripts/export-diagnostic.ps1`
- Linux/Mac: `./scripts/export-diagnostic.sh`

## Actualización

1. Hacer backup.
2. Actualizar código.
3. Levantar con docker compose.
4. Ejecutar migraciones Prisma (`install.*` ya lo hace).

## Modo portable sin Docker

- Windows: `start.bat`
- Linux/Mac: `start.sh`

## Variables importantes

Ver `server/.env.example`.

- SQLite default: `DB_PROVIDER=sqlite`
- PostgreSQL opcional: `DB_PROVIDER=postgresql` + `DATABASE_URL` de PostgreSQL

## Tests

```bash
npm run test -w server
```

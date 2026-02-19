# ClubPaddle - Sistema de reservas offline-first

## A) Arquitectura y decisiones

### Diagrama textual

[Public Web React]
  - / (landing)
  - /reservar
  - /confirmacion/:id
  - /gestionar?token=...
        |
        v
[API Express /public/*]
  - hold/confirm/manage
  - disponibilidad
  - whatsapp links + MessageLog
        |
        v
[Prisma ORM]
  - SQLite (default local file)
  - PostgreSQL (opcional por env)
        |
        v
[DB + archivos locales]
  - data sqlite
  - backups/
  - logs rotativos

[Admin Dashboard React /admin/*]
  - login JWT
  - agenda
  - clubes/canchas/bloqueos/precios/reservas/usuarios
  - backups
  - licencia
        |
        v
[API Express /admin/*]
  - auth + refresh
  - RBAC SECRETARIO/ADMIN
  - AuditLog

[Jobs locales]
  - cleanup HOLD expirados (cada minuto)

### SQLite vs PostgreSQL

- SQLite (default): instalación muy simple, archivo local, ideal offline y single-node.
- PostgreSQL (opcional): mejor concurrencia multiusuario y escalado.
- Lógica de negocio es compartida en servicios; solo cambia datasource Prisma.

### Concurrencia y anti-solape

- Regla server-side obligatoria en create/reschedule con validación anti-overlap.
- HOLD compite con CONFIRMED mientras holdExpiresAt > now.
- Blocks compiten igual que reservas.
- SQLite: transacción + chequeo anti-overlap (lock lógico por flujo de escritura serial).
- PostgreSQL: misma lógica + recomendación de migración SQL con `EXCLUDE USING gist` para hard constraint adicional.

### Plan de migración SQLite -> PostgreSQL

1. Configurar `DATABASE_URL` PostgreSQL y schema de provider Postgres.
2. Ejecutar `prisma migrate deploy`.
3. Exportar datos desde backup JSON.
4. Importar en PostgreSQL con script de restore.
5. Ejecutar validación de solapes y consistencia.

## B) Estructura monorepo

- `/server` API Express + Prisma + Zod + Swagger + jobs + tests
- `/client` React + Vite + Tailwind
- `/docker-compose.yml`
- `/install.ps1`, `/install.sh`
- `/start.bat`, `/start.sh`
- `/scripts/export-diagnostic.ps1`, `/scripts/export-diagnostic.sh`
- `/backups`, `/data`

## C) Modelos Prisma + seed

Modelos obligatorios incluidos:
- Club
- Court
- StaffUser
- Reservation (manage_token_hash, manage_token_last_rotated_at)
- Block
- PricingRule
- Payment
- AuditLog
- MessageLog
- License

Seed incluye:
- ADMIN inicial: `admin@club.local / admin1234`
- SECRETARIO inicial: `secretario@club.local / admin1234`
- Club demo + canchas demo

## D) Backend

- Express con `/public/*` y `/admin/*`
- Zod en validación pública/auth
- Swagger: `/api-docs`
- Rate limiting login/public
- HOLD + expiración por cron
- Manage token seguro (hash SHA-256, rotación en reprogramación/reenvío)
- RBAC: SECRETARIO vs ADMIN
- Backups, licencia offline MVP, logs rotativos

## E) Frontend

Public:
- `/`
- `/reservar`
- `/confirmacion/:id`
- `/gestionar?token=...`

Admin:
- `/admin/login`
- `/admin/agenda`
- `/admin/config`

## F) Packaging

- Dockerfiles server/client
- docker-compose.yml
- Instaladores one-click Windows/Linux-Mac
- Modo portable sin Docker (start.bat/start.sh)

## G) Operación no técnica

Ver `README.md`.

## H) Tests mínimos

En `server/tests`:
1. no solape en mismo slot/cancha
2. HOLD expirado no confirma
3. RBAC secretario/admin

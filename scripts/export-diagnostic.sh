#!/usr/bin/env bash
set -euo pipefail
OUT="diagnostic-$(date +%Y%m%d-%H%M%S).zip"
mkdir -p tmpdiag
cp -r server/logs tmpdiag/logs 2>/dev/null || true
cp -r backups tmpdiag/backups 2>/dev/null || true
cp server/.env.example tmpdiag/.env.example
( cd tmpdiag && zip -r ../$OUT . )
rm -rf tmpdiag
echo "Diagnostic exported: $OUT"

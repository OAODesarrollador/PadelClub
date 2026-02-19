$stamp = Get-Date -Format "yyyyMMdd-HHmmss"
$out = "diagnostic-$stamp.zip"
New-Item -ItemType Directory -Force tmpdiag | Out-Null
if (Test-Path server/logs) { Copy-Item server/logs tmpdiag/logs -Recurse -Force }
if (Test-Path backups) { Copy-Item backups tmpdiag/backups -Recurse -Force }
Copy-Item server/.env.example tmpdiag/.env.example -Force
Compress-Archive -Path tmpdiag\* -DestinationPath $out -Force
Remove-Item tmpdiag -Recurse -Force
Write-Output "Diagnostic exported: $out"

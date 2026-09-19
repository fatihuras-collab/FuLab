#!/bin/sh
set -eu
PORT="${PORT:-8080}"
case "$PORT" in ''|*[!0-9]*) echo 'Invalid PORT' >&2; exit 1;; esac
if [ "$PORT" -lt 1 ] || [ "$PORT" -gt 65535 ]; then exit 1; fi
printf 'Listen %s\n' "$PORT" > /etc/apache2/ports.conf
sed -i "s/<VirtualHost \*:80>/<VirtualHost *:$PORT>/" /etc/apache2/sites-available/000-default.conf
printf 'ServerName localhost\n' > /etc/apache2/conf-enabled/fulab.conf
exec apache2-foreground

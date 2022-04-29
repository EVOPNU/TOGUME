#!/usr/bin/env sh

echo "Starting to wait for Service at host '${1:-db}'"
while ! nc -z -v -w30 "${1:-db}" "${2:-3306}";
do
  echo "Waiting for '${1:-db}' to be ready";
  sleep 5;
done;
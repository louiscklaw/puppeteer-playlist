#!/usr/bin/env bash

set -ex

killall firebase || true

fuser -k -n tcp 9199 || true
fuser -k -n tcp 9099 || true
fuser -k -n tcp 9000 || true
fuser -k -n tcp 8085 || true
fuser -k -n tcp 8080 || true
fuser -k -n tcp 5002 || true
fuser -k -n tcp 5001 || true
fuser -k -n tcp 4500 || true
fuser -k -n tcp 4400 || true
fuser -k -n tcp 4000 || true

sleep 5

echo 'clear firebase done'

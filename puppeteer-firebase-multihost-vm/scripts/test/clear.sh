#!/usr/bin/env bash

set -ex

export BROWSER=none

fuser -k -n tcp 3000 || true
sleep 1
fuser -k -n tcp 3001 || true
sleep 1
fuser -k -n tcp 3002 || true
sleep 1

echo 'clear done'

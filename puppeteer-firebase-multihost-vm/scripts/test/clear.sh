#!/usr/bin/env bash

set -ex

export BROWSER=none

fuser -k -n tcp 3000 || true
sleep 1
fuser -k -n tcp 3001 || true
sleep 1
fuser -k -n tcp 3002 || true
sleep 1

# kill firebase emulator
pushd firebase
  scripts/clear.sh
  
popd


echo 'clear done'

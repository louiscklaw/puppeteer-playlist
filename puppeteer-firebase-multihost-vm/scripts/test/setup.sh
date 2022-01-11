#!/usr/bin/env bash

set -ex

export BROWSER=none

trap 'catch' ERR
catch() {
  echo "Error occurred. Cleaning up..."
  exit 1
}

fuser -k -n tcp 3000 || true
sleep 1
fuser -k -n tcp 3001 || true
sleep 1
fuser -k -n tcp 3002 || true
sleep 1

# yarn --dev
pushd react_host_admin/App
  scripts/init.sh
popd

pushd react_host_client/App
  scripts/init.sh
popd

pushd react_host_cms/App
  scripts/init.sh
popd


pushd react_host_admin/App
  scripts/dev.sh &
popd

pushd react_host_client/App
  scripts/dev.sh &
popd

pushd react_host_cms/App
  scripts/dev.sh &
popd

echo 'wait for ports up'
./scripts/wait-for-it.sh -t 120 localhost:3000
./scripts/wait-for-it.sh -t 120 localhost:3001
./scripts/wait-for-it.sh -t 120 localhost:3002

echo 'wait a while for servers to settle'
sleep 30

echo 'test setup done'

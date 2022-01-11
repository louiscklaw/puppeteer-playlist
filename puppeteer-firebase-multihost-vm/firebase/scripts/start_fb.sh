#!/usr/bin/env bash

set -ex

curl -sL https://firebase.tools | upgrade=true bash

sudo killall firebase java || true
sleep 1

firebase --version

pushd functions
  # npm cache clean --force
  npm install
popd

nice firebase emulators:start &

./scripts/wait-for-it.sh -t 120 localhost:9199
./scripts/wait-for-it.sh -t 120 localhost:9099
./scripts/wait-for-it.sh -t 120 localhost:9000
./scripts/wait-for-it.sh -t 120 localhost:8080
./scripts/wait-for-it.sh -t 120 localhost:5001
./scripts/wait-for-it.sh -t 120 localhost:4000

sleep 10

echo 'firebase setup done'

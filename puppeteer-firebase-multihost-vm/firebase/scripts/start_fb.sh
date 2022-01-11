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

wait 

sleep 1

if [[ -z "${CI}" ]]; then
  # when the build triggered by local dev
  pushd functions
    npm install
  popd

  nice firebase --project react-tryout-6d7dd emulators:start

else
  # when the build triggered by jenkins
  curl -sL https://firebase.tools | upgrade=true bash
  firebase --version

  pushd functions
    npm install
  popd

  nice firebase --project react-tryout-6d7dd emulators:start &

  # ./scripts/wait-for-it.sh -t 120 localhost:9199
  ./scripts/wait-for-it.sh -t 120 localhost:9099
  ./scripts/wait-for-it.sh -t 120 localhost:9000
  ./scripts/wait-for-it.sh -t 120 localhost:8080
  ./scripts/wait-for-it.sh -t 120 localhost:5001
  # ./scripts/wait-for-it.sh -t 120 localhost:4000

  sleep 10

  echo 'firebase setup done'

fi

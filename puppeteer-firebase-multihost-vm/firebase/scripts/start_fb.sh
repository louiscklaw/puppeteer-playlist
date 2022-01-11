#!/usr/bin/env bash

set -ex

if [[ -z "${CI}" ]]; then
  # when the build triggered by local dev
  pushd functions
    npm install
  popd

  nice firebase --project react-tryout-6d7dd emulators:start

else
  # when the build triggered by jenkins
  # curl -sL https://firebase.tools | upgrade=true bash
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

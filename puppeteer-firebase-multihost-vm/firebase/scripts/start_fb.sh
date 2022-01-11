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

nice firebase emulators:start

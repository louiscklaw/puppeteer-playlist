#!/usr/bin/env bash

set -ex

pushd functions
  npm install
popd

nice firebase --project react-tryout-6d7dd emulators:start

echo 'firebase setup done'

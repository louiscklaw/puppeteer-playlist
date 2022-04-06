#!/usr/bin/env bash

set -ex

pushd functions
  npm install
popd

nice firebase --project helloworld-b29f6 emulators:start

echo 'firebase setup done'

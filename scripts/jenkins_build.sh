#!/usr/bin/env bash

set -ex


echo 'helloworld from jenkins'

pushd puppeteer-helloworld-tryout
  bash scripts/build.sh
popd

pushd puppeteer-mocha-chai-helloworld-tryout
  bash scripts/build.sh
popd

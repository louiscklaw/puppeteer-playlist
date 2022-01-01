#!/usr/bin/env bash

set -ex


echo 'helloworld from jenkins'

pushd puppeteer-helloworld-tryout
  bash scripts/build.sh
popd

pushd puppeteer-network-throttling-tryout
  bash scripts/build.sh
popd

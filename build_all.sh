#!/usr/bin/env bash

set -ex

cd puppeteer-helloworld
  npm install
  ./build.sh
cd ..

cd pixelmatch-helloworld
  npm install
  ./build.sh
cd ..

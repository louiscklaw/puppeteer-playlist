#!/usr/bin/env bash

# docker run -t --rm -v $PWD:/root logickee/travis-puppeteer ./build_all.sh

docker run -it --init --rm --cap-add=SYS_ADMIN \
  --name puppeteer-chrome \
  -v $PWD:/root \
  logickee/travis-puppeteer \
  bash

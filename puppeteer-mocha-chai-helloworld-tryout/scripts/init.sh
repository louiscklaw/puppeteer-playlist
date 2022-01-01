#!/usr/bin/env bash

set -ex

touch helloworld
DELETE_FILE_LIST=`find . \
  |grep -v scripts \
  |grep -E -i -v '\.$'\
  |grep -v 'test.js'\
  |grep -v 'test/'`
rm -rf $DELETE_FILE_LIST


yarn install
yarn add puppeteer
yarn add mocha
yarn add chai

node test.js

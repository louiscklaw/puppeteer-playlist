#!/usr/bin/env bash

set -ex

npm install puppeteer puppeteer-extra
npm install puppeteer-extra-plugin-stealth puppeteer-extra-plugin-adblocker

node ./index.js

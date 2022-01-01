#!/usr/bin/env bash

set -ex

rm -rf node_modules || true
rm -rf yarn.lock || true

yarn --dev

yarn test:e2eTest

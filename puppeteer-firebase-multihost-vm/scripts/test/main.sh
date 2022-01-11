#!/usr/bin/env bash

set -ex

scripts/test/clear.sh

pushd firebase
  scripts/start_fb.sh
popd

scripts/test/setup.sh

pushd tests_src
  yarn --dev
popd

pushd tests_src
  yarn run int_test
popd

echo 'test done'

scripts/test/clear.sh


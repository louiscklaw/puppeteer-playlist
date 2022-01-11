#!/usr/bin/env bash

set -ex

pushd firebase
  scripts/start_fb.sh
popd

# scripts/test/setup.sh

# pushd tests_host
#   yarn --dev
# popd

# pushd tests_host
#   yarn run int_test
# popd

# echo 'test done'

# scripts/test/clear.sh


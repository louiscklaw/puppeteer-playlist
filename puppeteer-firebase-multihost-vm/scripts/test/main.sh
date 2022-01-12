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
  yarn run test
popd

echo 'test done'

scripts/test/clear.sh

# if test have a clear end, remove temp actual screen shot, otherwise keep it for debug
rm -rf **/actual/*.png
rm -rf **/__diff_output__

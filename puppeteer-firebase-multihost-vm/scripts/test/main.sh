#!/usr/bin/env bash

set -ex

rm -rf **/actual/*.png
rm -rf **/__diff_output__

scripts/test/clear.sh

pushd firebase
  scripts/start_fb.sh
  scripts/load_ac.sh
  scripts/load_db.sh
popd

scripts/test/setup.sh

pushd tests_src
  yarn --dev
popd

pushd tests_src
  yarn test
popd

echo 'test done'

scripts/test/clear.sh

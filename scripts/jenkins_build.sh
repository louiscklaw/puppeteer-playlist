#!/usr/bin/env bash

set -ex


echo 'helloworld from jenkins'

pushd puppeteer-firebase-multihost-vm
  scripts/test/main.sh
popd

pushd puppeteer-react-multihost-vm
  scripts/test/main.sh
popd

pushd puppeteer-helloworld-tryout
  bash scripts/build.sh
popd

pushd pagechange-alert-visual-diff-tryout
  bash scripts/build.sh
popd

pushd pyppeteer-tryout
  bash test.sh
popd

pushd jobsdb-helloworld
  bash build.sh
popd

# pushd youtube-live-viewer-count
#   bash build.sh
# popd

# pushd pyppeteer-page-object-tryout
#   bash test.sh
# popd

# pushd puppeteer-mocha-automated-testing
#   bash scripts/build.sh
# popd

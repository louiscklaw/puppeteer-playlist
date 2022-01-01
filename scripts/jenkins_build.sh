#!/usr/bin/env bash

set -ex


echo 'helloworld from jenkins'

pushd puppeteer-helloworld-tryout
  bash scripts/build.sh
popd

pushd pagechange-alert-visual-diff-tryout
  bash scripts/build.sh
popd



git merge master
git push


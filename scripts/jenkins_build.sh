#!/usr/bin/env bash

set -ex


echo 'helloworld from jenkins'

pushd puppeteer-helloworld-tryout
  bash scripts/build.sh
popd

pushd pagechange-alert-visual-diff-tryout
  bash scripts/build.sh
popd



git merge origin/master
git push origin HEAD:master


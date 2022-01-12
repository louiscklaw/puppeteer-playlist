#!/usr/bin/env bash

set -ex

pushd tests_src
  yarn run int_test

  # test by jest
  yarn run e2e_test
  
  yarn run vis_test
popd

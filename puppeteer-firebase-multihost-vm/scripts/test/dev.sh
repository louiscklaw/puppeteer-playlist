#!/usr/bin/env bash

set -ex

pushd react_host_admin/App
  yarn test
popd

pushd react_host_cms/App
  yarn test
popd

pushd react_host_client/App
  yarn test
popd


pushd tests_src
  yarn run int_test

  # test by jest
  yarn run e2e_test
  
  yarn run vis_test
popd

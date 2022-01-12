#!/usr/bin/env bash

set -ex

export CI=1

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
  yarn test
popd

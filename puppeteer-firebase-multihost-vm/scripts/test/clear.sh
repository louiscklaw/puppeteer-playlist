#!/usr/bin/env bash

set -ex

export BROWSER=none

pushd react_host_admin/App
  scripts/clear.sh
popd
  
pushd react_host_client/App
  scripts/clear.sh
popd
  
pushd react_host_cms/App
  scripts/clear.sh
popd
  

# kill firebase emulator
pushd firebase
  scripts/clear.sh
popd


echo 'clear done'

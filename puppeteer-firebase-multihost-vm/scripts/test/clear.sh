#!/usr/bin/env bash

set -ex

export BROWSER=none

pushd react_host_admin
  scripts/clear.sh
popd
  
pushd react_host_client
  scripts/clear.sh
popd
  
pushd react_host_cms
  scripts/clear.sh
popd
  

# kill firebase emulator
pushd firebase
  scripts/clear.sh
popd


echo 'clear done'

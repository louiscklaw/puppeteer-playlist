#!/usr/bin/env bash

set -ex

cd 3c71f08e4092e2057bdf583f7ec1ab56

  cp ../viewer_count.json ./ZreBbmKtOoE_viewer_count.json
  git add .
  git commit . -m"update on $(date),"
  git push

cd -

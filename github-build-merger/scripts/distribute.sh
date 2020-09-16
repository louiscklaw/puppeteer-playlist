#!/usr/bin/env bash

set -ex

PROJ_DIR=/home/logic/_workspace/puppeteer-playlist

mkdir -p $PROJ_DIR/github-build-merger

rsync -avzh --progress /home/logic/_workspace/github-playlist/github-build-merger-tryout/  $PROJ_DIR/github-build-merger


rsync -avzh --progress /home/logic/_workspace/github-playlist/scripts/update_main_build_chain.py  $PROJ_DIR/scripts/update_main_build_chain.py


rsync -avzh --progress /home/logic/_workspace/github-playlist/scripts/update_main_build_chain.sh  $PROJ_DIR/scripts/update_main_build_chain.sh


mkdir -p $PROJ_DIR/.github/workflows
touch $PROJ_DIR/.github/workflows/master_build.yml

cd $PROJ_DIR
  scripts/update_main_build_chain.sh


cd $PROJ_DIR/github-build-merger
  echo 'remember rename github-build-merger-tryout to github-build-merger'

  sed -i -e 's/github-build-merger-tryout/github-build-merger/' $PROJ_DIR/.github/workflows/master_build.yml

  sed -i -e 's/github-build-merger-tryout/github-build-merger/' $PROJ_DIR/github-build-merger/test.sh

cd -

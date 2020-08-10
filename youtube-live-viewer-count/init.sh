#!/usr/bin/env bash

set -ex

# clone gist
git clone git@gist.github.com:3c71f08e4092e2057bdf583f7ec1ab56.git

# install yarn
yarn

echo 'done'
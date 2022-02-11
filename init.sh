#!/usr/bin/env bash

# https://computingforgeeks.com/install-node-js-14-on-ubuntu-debian-linux/

set -ex

curl -sL https://deb.nodesource.com/setup_14.x | sudo bash -

sudo apt -y install nodejs
sudo apt -y install gcc g++ make
sudo npm install --global yarn

node -v
yarn -V

#!/usr/bin/env bash

set -x

source .env

while true; do
  scripts/build.sh

  sleep 180
done
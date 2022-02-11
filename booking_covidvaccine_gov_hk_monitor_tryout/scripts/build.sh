#!/usr/bin/env bash

set -ex

yarn 

node test.js $SLACK_DEBUG_WEBHOOK
node test1.js $SLACK_DEBUG_WEBHOOK
# node command_test.js $SLACK_DEBUG_WEBHOOK

#!/usr/bin/env bash

set -ex

node test.js $SLACK_DEBUG_WEBHOOK

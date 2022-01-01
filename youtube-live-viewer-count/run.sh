#!/usr/bin/env bash

set -ex

# node test.js <youtube_link> <json_store_filename>

node test.js https://www.youtube.com/watch\?v\=ZreBbmKtOoE viewer_count.json

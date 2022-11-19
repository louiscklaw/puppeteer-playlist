#!/usr/bin/env bash

set -ex

docker run -p 3000:3000 --restart always -d \
  -e "MAX_CONCURRENT_SESSIONS=3" \
  -e "WORKSPACE_DELETE_EXPIRED=true" \
  -e "WORKSPACE_EXPIRE_DAYS=7"  \
  -e "ENABLE_CORS=true" \
  -e "EXIT_ON_HEALTH_FAILURE=true" \
  -e "PREBOOT_CHROME=true" \
  -e "KEEP_ALIVE=true" \
  -e "CHROME_REFRESH_TIME=3600000" \
  -e "DEFAULT_LAUNCH_ARGS=[\"--window-size=1920,1080\"]" \
  -e "FUNCTION_ENABLE_INCOGNITO_MODE=true" \
  --name browserless-helloworld browserless/chrome

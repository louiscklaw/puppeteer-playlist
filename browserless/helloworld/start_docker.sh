#!/usr/bin/env bash

set -ex

# -e "MAX_CONCURRENT_SESSIONS=3" \

  # -e "CONNECTION_TIMEOUT=5000" \
  # -e "WORKSPACE_DELETE_EXPIRED=true" \
  # -e "WORKSPACE_EXPIRE_DAYS=7"  \
  # -e "ENABLE_CORS=true" \
  # -e "EXIT_ON_HEALTH_FAILURE=true" \
  # -e "PREBOOT_CHROME=true" \
  # -e "KEEP_ALIVE=true" \
  # -e "CHROME_REFRESH_TIME=3600000" \
  # -e "DEFAULT_LAUNCH_ARGS=[\"--window-size=1920,1080\"]" \
  # -e "FUNCTION_ENABLE_INCOGNITO_MODE=true" \

docker kill `docker ps -qa` || true
sleep 1

docker container prune -f
docker system prune -f
docker image prune -f
docker volume prune -f
docker network prune -f


docker run -p 3000:3000 --restart always -d \
  -e "CONNECTION_TIMEOUT=600000"
  --name browserless-helloworld browserless/chrome

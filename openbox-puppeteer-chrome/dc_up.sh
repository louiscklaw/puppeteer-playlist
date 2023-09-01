#!/usr/bin/env bash

set -ex

sudo chown logic:logic -R .

docker compose up -d --build

docker compose logs -f

#!/usr/bin/env bash

set -ex

pip install pipenv

pipenv sync
pipenv run python3 ./main.py

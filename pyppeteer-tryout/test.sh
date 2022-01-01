#!/usr/bin/env bash

set -ex

python -V

pip install pipenv

pipenv sync
pipenv run python3 ./main.py

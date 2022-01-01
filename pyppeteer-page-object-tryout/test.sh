#!/usr/bin/env bash

set -ex

pip install pipenv

python -V

pipenv sync
pipenv run python3 ./main.py

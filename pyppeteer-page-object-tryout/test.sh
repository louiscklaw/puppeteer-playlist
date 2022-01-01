#!/usr/bin/env bash

set -ex

python -V

apt install -y python-pip

pip install pipenv

pipenv sync
pipenv run python3 ./main.py

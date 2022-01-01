#!/usr/bin/env bash

set -ex


sudo apt install -y python python-pip

pip install pipenv

python -V

pipenv sync
pipenv run python3 ./main.py

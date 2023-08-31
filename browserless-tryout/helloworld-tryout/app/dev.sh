#!/usr/bin/env bash

set -ex

rm -rf /node_modules/*

yarn newInstall

yarn dev

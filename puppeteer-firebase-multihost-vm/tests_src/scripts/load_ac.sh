#!/usr/bin/env bash
# load_db.sh

# https://github.com/jloosli/node-firestore-import-export

export GOOGLE_APPLICATION_CREDENTIALS=$HOME/.firebase-keys/helloworld-b29f6-firebase-adminsdk-mykza-91c7055bce.json

set -e

# NOTE: IMPORT TO HOLD THE CHANGE WITHIN EMULATOR ONLY
export FIRESTORE_EMULATOR_HOST="localhost:8080"
export FIREBASE_AUTH_EMULATOR_HOST="localhost:9099"

pushd ./db_testing/accounts
  node ./del.js
  node ./add.js
popd
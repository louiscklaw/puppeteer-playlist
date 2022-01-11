#!/usr/bin/env bash

set -ex

export PORT=3001

fuser -k -n tcp $PORT || true

# yarn add @testing-library/jest-dom
# yarn add @testing-library/react
# yarn add @testing-library/user-event
# yarn add firebase
# yarn add react
# yarn add react-dom
# yarn add react-scripts

rm -rf build || true

yarn --dev

yarn start

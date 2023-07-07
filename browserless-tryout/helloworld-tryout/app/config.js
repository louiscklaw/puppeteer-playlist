const fs = require('fs');
const path = require('path');
const PROJ_HOME = __dirname;

const BROWSERLESS_HOST = 'browserless_engine:3000';
const BROWSER_WEBSOCKET_URL = `ws://${BROWSERLESS_HOST}/?hello=world`;

const STORE_PATH = `/volume_backend`;

module.exports = {
  BROWSER_WEBSOCKET_URL,
  STORE_PATH,
};

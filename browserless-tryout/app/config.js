const fs = require('fs');
const path = require('path');
const PROJ_HOME = __dirname;

const BROWSER_WEBSOCKET_URL = 'ws://127.0.0.1:3000/?hello=world&--window-size=1200,900';
const STORE_PATH = `${PROJ_HOME}/store`;

module.exports = {
  BROWSER_WEBSOCKET_URL,
  STORE_PATH,
};

const fs = require('fs');
const puppeteer = require('puppeteer-core');
const Diff = require('diff');

var express = require('express');
var router = express.Router();

var config = require('../../config');
const removeSportlight = require('../utils/removeSportlight');
const clearAds = require('../utils/clearAds');
const getPosts = require('../utils/getPosts');

// http://localhost:8080/debug/helloworld

const { BROWSER_WEBSOCKET_URL } = config;

var test_json = { hello: 'world' };

var STORE_PATH = `${config.STORE_PATH}/jobsdb`;

module.exports = function (app) {
  app.get('/jobsdb/helloworld', function (req, res) {
    var STORE_JSON = `${STORE_PATH}/helloworld.json`

    // console.log(`writing to ${STORE_JSON}`)

    fs.writeFileSync(STORE_JSON, JSON.stringify({ hello: 'world' }), { encoding: 'utf-8' });
    res.send(__filename);
    // res.send({ hello: 'world' })
  });
};

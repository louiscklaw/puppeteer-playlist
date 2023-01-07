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

var STORE_PATH = `${config.STORE_PATH}/carousell`;

module.exports = function (app) {
  app.get('/jobsdb/get_jobsdb', async (req, res) => {
    const browser = await puppeteer.connect({ browserWSEndpoint: BROWSER_WEBSOCKET_URL });

    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });

    await page.goto('http://www.jobsdb.com/');
    var data = await page.screenshot({ fullPage: true });

    // res.send(await page.title());
    return res.end(data, 'binary');
  });
};

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
var STORE_JSON = `${STORE_PATH}/get_jobsdb.json`
var STORE_PNG = `${STORE_PATH}/get_jobsdb.png`

module.exports = function (app) {
  app.get('/jobsdb/get_jobsdb', async (req, res) => {
    const browser = await puppeteer.connect({ browserWSEndpoint: BROWSER_WEBSOCKET_URL });

    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });

    await page.goto('http://www.jobsdb.com/');

    // click hong kong
    //*[@id="app"]/div/div/div[2]/div/div/div/div/div[2]/div/div[1]/a/span/div/div/div[2]
    const xpathExpression = '//*[@id="app"]/div/div/div[2]/div/div/div/div/div[2]/div/div[1]/a/span/div/div/div[2]';
    const buttonElement = await page.evaluateHandle((xpath) => {
      const iterator = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
      return iterator.singleNodeValue;
    }, xpathExpression);

    // Click on the selected element
    await buttonElement.click();

    await page.waitForTimeout(10 * 1000);

    await page.screenshot({ path: STORE_PNG, fullPage: true });

    res.send({ get_jobsdb: 'helloworld' })
  });
};

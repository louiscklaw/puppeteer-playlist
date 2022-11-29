const puppeteer = require('puppeteer-core');

var express = require('express');
var router = express.Router();

var config = require('../config')


// http://localhost:8080/debug/helloworld

const {BROWSER_WEBSOCKET_URL} = config

var test_json = {hello:'world'};

router.get('/helloworld', function(req, res) {
    res.json(test_json);
});


router.get('/get_jobsdb', async (req, res) => {
    const browser = await puppeteer.connect({ browserWSEndpoint: BROWSER_WEBSOCKET_URL });
  
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });
  
    await page.goto('http://www.jobsdb.com/');
    var data = await page.screenshot({ fullPage: true });
  
    // res.send(await page.title());
    return res.end(data, 'binary');
  });


  router.get('/get_validation_engineer', async (req, res) => {
    const browser = await puppeteer.connect({
      browserWSEndpoint: BROWSER_WEBSOCKET_URL,
      ignoreHTTPSErrors: true,
    });
  
    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(0);
  
    await page.goto('https://hk.jobsdb.com/hk/search-jobs/validation/1', { waitUntil: ['load', 'networkidle0', 'networkidle2'] });
  
    var data = await page.screenshot({ fullPage: true });
  
    // res.send(await page.title());
    return res.end(data, 'binary');
  });
  

module.exports = router;

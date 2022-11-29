const express = require('express');
const puppeteer = require('puppeteer-core');
const fs = require('fs');

var route_debug = require('./routes/debug.js');

const BROWSER_WEBSOCKET_URL = 'ws://127.0.0.1:3000/?hello=world&--window-size=1200,900';

const app = express();

app.use(express.static('public'));


app.use('/debug', route_debug);

app.get('/get_validation_engineer', async (req, res) => {
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

app.get('/capture_carousell', async (req, res) => {
  const browser = await puppeteer.connect({
    browserWSEndpoint: BROWSER_WEBSOCKET_URL,
    ignoreHTTPSErrors: true,
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 * 10 });
  await page.setDefaultNavigationTimeout(0);

  await page.goto('http://www.carousell.com.hk/', { waitUntil: ['load', 'networkidle0', 'networkidle2'] });

  var data = await page.screenshot({ fullPage: true });

  // res.send(await page.title());
  return res.end(data, 'binary');
});

app.get('/capture_carousell/javascript', async (req, res) => {
  const browser = await puppeteer.connect({
    browserWSEndpoint: BROWSER_WEBSOCKET_URL,
    ignoreHTTPSErrors: true,
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 * 10 });
  await page.setDefaultNavigationTimeout(0);

  await page.goto('http://www.carousell.com.hk/search/javascript', { waitUntil: ['load', 'networkidle0', 'networkidle2'] });

  var data = await page.screenshot({ fullPage: true });

  // res.send(await page.title());
  return res.end(data, 'binary');
});

app.get('/capture_carousell/javascript/json_content', async (req, res) => {
  const browser = await puppeteer.connect({
    browserWSEndpoint: BROWSER_WEBSOCKET_URL,
    ignoreHTTPSErrors: true,
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 * 10 });
  await page.setDefaultNavigationTimeout(0);

  await page.goto('http://www.carousell.com.hk/search/javascript', {
    waitUntil: ['load', 'networkidle0', 'networkidle2'],
  });

  const clearAds = await page.evaluate(() => {
    document.querySelectorAll("[id^='google_ads_iframe_']").forEach((e) => {
      e.parentElement.parentElement.remove();
    });
    document.querySelectorAll("div[id^='native-ad']").forEach((e) => e.remove());
  });

  const removeSportlight = await page.evaluate(() => {
    var xpath = "//p[text()='Spotlight']";

    for (var i = 0; i < 30; i++) {
      var ele = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
      if (ele) {
        ele
          .parentElement
          .parentElement
          .parentElement
          .parentElement
          .parentElement
          .parentElement.remove();
      }
    }
  });

  const posts = await page.evaluate(() => {
    var e_all_cards = document.querySelectorAll("div[data-testid^='listing-card']");
    e_all_cards.forEach((e) => {
      e.querySelector('a').querySelectorAll('div')[2].querySelector('div').remove()
    });

    var list_names = []
    var list_subjects = []
    var list_prices = []

    e_all_cards.forEach(e => list_names.push(e.querySelectorAll('p')[0].innerText) )
    e_all_cards.forEach(e => list_subjects.push(e.querySelectorAll('p')[1].innerText) )
    e_all_cards.forEach(e => 
      list_prices.push(e.querySelectorAll('div')[7].innerText) 
      )

    return list_names.map((n, idx) => { return {
      name : list_names[idx],
      subject: list_subjects[idx],
      price: list_prices[idx]
    }})
  });

  const aHandle = await page.evaluate(() => 2);

  // var data = await page.screenshot({ fullPage: true });
  
  // return res.end(data, 'binary');
  res.send({ title: await page.title(), aHandle, posts, screen_capture: 'test.png' });
});

app.get('/get_jobsdb', async (req, res) => {
  const browser = await puppeteer.connect({ browserWSEndpoint: BROWSER_WEBSOCKET_URL });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  await page.goto('http://www.jobsdb.com/');
  var data = await page.screenshot({ fullPage: true });

  // res.send(await page.title());
  return res.end(data, 'binary');
});

// app.get('/get_title', async (req, res) => {
//   var data = '';
//   const browser = await puppeteer.connect({ browserWSEndpoint: BROWSER_WEBSOCKET_URL });
//   const page = await browser.newPage();
//   await page.goto('http://www.example.com/');

//   res.send(await page.title());
// });

// app.get('/', async (req, res) => {
//   res.send(index_html);
// });

app.listen(8080);

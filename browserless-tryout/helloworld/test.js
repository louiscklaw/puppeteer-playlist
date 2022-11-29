const express = require('express');
const puppeteer = require('puppeteer-core');
const fs = require('fs');

const BROWSER_WEBSOCKET_URL = 'ws://127.0.0.1:3000';

const app = express();

app.use(express.static('public'));

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

app.get('/capture_youtube_com', async (req, res) => {
  const browser = await puppeteer.connect({
    browserWSEndpoint: BROWSER_WEBSOCKET_URL,
    ignoreHTTPSErrors: true,
  });

  const page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);

  await page.goto('http://www.youtube.com/', { waitUntil: ['load', 'networkidle0', 'networkidle2'] });

  var data = await page.screenshot({ fullPage: true });

  // res.send(await page.title());
  return res.end(data, 'binary');
});

app.get('/capture_example_com', async (req, res) => {
  const browser = await puppeteer.connect({ browserWSEndpoint: BROWSER_WEBSOCKET_URL });

  const page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);

  await page.goto('http://www.example.com/', { waitUntil: 'networkidle0' });

  var data = await page.screenshot({ fullPage: true });

  // res.send(await page.title());
  return res.end(data, 'binary');
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

app.get('/get_title', async (req, res) => {
  var data = '';
  const browser = await puppeteer.connect({ browserWSEndpoint: BROWSER_WEBSOCKET_URL });
  const page = await browser.newPage();
  await page.goto('http://www.example.com/');

  res.send(await page.title());
});

// app.get('/', async (req, res) => {
//   res.send(index_html);
// });

app.listen(8080);

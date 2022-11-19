const express = require('express');
const puppeteer = require('puppeteer-core');

const app = express();

app.get('/image', async (req, res) => {
  var data = '';
  const browser = await puppeteer.connect({ browserWSEndpoint: 'ws://localhost:3000' });
  const page = await browser.newPage();
  await page.goto('http://www.example.com/');

  res.send(await page.title());
});

app.listen(8080);

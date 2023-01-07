const fs = require('fs');
const puppeteer = require('puppeteer-core');
const Diff = require('diff');

const config = require('./config');

(async () => {
  const browser = await puppeteer.connect({
    browserWSEndpoint: `ws://browserless_engine:3000/?hello=world`,
    ignoreHTTPSErrors: true,
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 * 10 });
  await page.setDefaultNavigationTimeout(0);

  await page.goto(`https://www.example.com`, {
    waitUntil: ['load', 'networkidle0', 'networkidle2'],
  });

  var temp = await page.content()

  console.log({temp});

})()

console.log("done")
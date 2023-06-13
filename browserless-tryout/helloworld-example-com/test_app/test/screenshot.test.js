const fs = require('fs');
const puppeteer = require('puppeteer-core');
const { expect } = require('chai');
const _ = require('lodash');

const screenshot_path = 'screenshots';
const filename = `example-com`;

describe('screenshot test', function () {
  let page;

  it('helloworld', async function () {
    const browser = await puppeteer.connect({
      browserWSEndpoint: `ws://browserless_engine:3000/?hello=world`,
      ignoreHTTPSErrors: true,
    });

    const screenshot_file = `${screenshot_path}/${filename}.jpg`;

    page = await browser.newPage();

    await page.goto('http://www.example.com');

    await page.screenshot({ path: `${screenshot_file}` });

    const [p_target_user] = await page.$x(`//h1`);

    await page.close();
  });
});

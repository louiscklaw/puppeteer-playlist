const fs = require('fs');
const puppeteer = require('puppeteer-core');
const { expect } = require('chai');
const _ = require('lodash');

describe('sample test', function () {
  let page;

  it('helloworld', async function () {
    const browser = await puppeteer.connect({
      browserWSEndpoint: `ws://browserless_engine:3000/?hello=world`,
      ignoreHTTPSErrors: true,
    });

    page = await browser.newPage();
    await page.goto('http://www.example.com');

    const [p_target_user] = await page.$x(`//h1`);

    await page.close();
  });
});

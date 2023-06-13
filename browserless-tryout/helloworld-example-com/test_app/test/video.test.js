const fs = require('fs');
const puppeteer = require('puppeteer-core');
const { expect } = require('chai');
const _ = require('lodash');
const { PuppeteerScreenRecorder } = require('puppeteer-screen-recorder');

const video_path = 'videos';
const screenshot_path = 'screenshots';
const filename = `example-com`;
const video_file = `${video_path}/${filename}.mp4`;

const Config = {
  followNewTab: true,
  videoFrame: {
    width: 1024, height: 768,
  },
  fps: 25,
  videoCrf: 18,
};

describe('video test', function () {
  let page;

  it('helloworld', async function () {
    this.timeout(10 * 1000);

    const browser = await puppeteer.connect({
      browserWSEndpoint: `ws://browserless_engine:3000/?hello=world`,
      ignoreHTTPSErrors: true,
    });

    const screenshot_file = `${screenshot_path}/${filename}.jpg`;

    page = await browser.newPage();

    const recorder = new PuppeteerScreenRecorder(page);
    await page.setViewport({ width: 1920, height: 1080 });

    await recorder.start(`${video_file}`, Config);

    await page.goto('http://www.example.com');

    const [p_target_user] = await page.$x(`//h1`);

    await recorder.stop();

    await page.close();
    await browser.close();

  });
});

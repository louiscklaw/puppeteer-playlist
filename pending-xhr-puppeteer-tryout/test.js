#!/usr/bin/env node

const puppeteer = require( 'puppeteer' );
const { PendingXHR } = require('pending-xhr-puppeteer');

( async () => {
  const browser = await puppeteer.launch({
    headless: true,
  });

  const page = await browser.newPage();
  const pendingXHR = new PendingXHR(page);

  await page.goto(`http://www.example.com`);
  // // Here all xhr requests are not finished

  await pendingXHR.waitForAllXhrFinished();
  // // Here all xhr requests are finished

  await browser.close();
} )();

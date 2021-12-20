// const puppeteer = require('puppeteer');
// const chalk = require('chalk');
import puppeteer from 'puppeteer';
import chalk from 'chalk';

const enablePageConsoleLog = (page) => {
  page
    .on('console', (message) => {
      const type = message.type().substr(0, 3).toUpperCase();
      const colors = {
        LOG: (text) => text,
        ERR: chalk.red,
        WAR: chalk.yellow,
        INF: chalk.cyan,
      };
      const color = colors[type] || chalk.blue;
      console.log(color(`${type} ${message.text()}`));
    })
    .on('pageerror', ({ message }) => console.log(chalk.red(message)))
    .on('response', (response) => console.log(chalk.green(`${response.status()} ${response.url()}`)))
    .on('requestfailed', (request) => console.log(chalk.magenta(`${request.failure().errorText} ${request.url()}`)));
};

// start
(async () => {
  const browser = await puppeteer.launch({
    defaultViewport: {
      width: 1920,
      height: 2080,
    },
    ignoreHTTPSErrors: true,
  });

  const page = await browser.newPage();
  enablePageConsoleLog(page);

  await page.goto('https://example.com');
  await page.screenshot({
    path: 'example.png',
  });

  await browser.close();
})();

(async () => {
  const browser = await puppeteer.launch({
    defaultViewport: {
      width: 1920,
      height: 2080,
    },
    ignoreHTTPSErrors: true,
  });
  const page = await browser.newPage();
  await page.goto('https://facebook.com');
  await page.screenshot({
    path: 'facebook.png',
  });

  await browser.close();
})();

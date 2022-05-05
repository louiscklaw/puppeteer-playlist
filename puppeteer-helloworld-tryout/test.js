const puppeteer = require('puppeteer');
const chalk = require('chalk');
// import puppeteer from 'puppeteer';
// import chalk from 'chalk';

const enablePageConsoleLog = (log_prefix, page) => {
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
      console.log(color(`${log_prefix} ${type} ${message.text()}`));
    })
    .on('pageerror', ({ message }) => console.log(chalk.red(`${log_prefix} ${message}`)))
    .on('response', (response) => console.log(chalk.green(`${log_prefix}  ${response.status()} ${response.url()}`)))
    .on('requestfailed', (request) => console.log(chalk.magenta(`${log_prefix}  ${request.failure().errorText} ${request.url()}`)));
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
  const LOG_PREFIX = 'example.com';
  const page = await browser.newPage();
  enablePageConsoleLog(LOG_PREFIX, page);

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
  const LOG_PREFIX = 'facebook.com';
  enablePageConsoleLog(LOG_PREFIX, page);

  await page.goto('https://facebook.com');
  await page.screenshot({
    path: 'facebook.png',
  });

  await browser.close();
})();

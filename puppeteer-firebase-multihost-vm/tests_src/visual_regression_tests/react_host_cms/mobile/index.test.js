const puppeteer = require('puppeteer');

const CASE_HOME = __dirname;
const TEST_HOME = `${CASE_HOME}/../..`;
const SRC_HOME = `${TEST_HOME}/..`;
const UTILS_HOME = `${SRC_HOME}/utils`;
const ACTUAL_SCREENSHOT_PATH = `${CASE_HOME}/actual`;

const { puppeteer_options_mobile } = require(`${UTILS_HOME}/puppeteer_options.js`);
const { assertScreenShotPct } = require(`${UTILS_HOME}/assertScreenShot`);

describe('visual_regression_tests', () => {
  test(
    'chrome_mobile_helloworld',
    async () => {
      await client_page.goto('http://localhost:3002', { waitUntil: 'domcontentloaded' });
      await assertScreenShotPct(client_page, 0.02, ACTUAL_SCREENSHOT_PATH);
    },
    30 * 1000
  );

  beforeAll(async () => {
    client_browser = await puppeteer.launch({ ...puppeteer_options_mobile, headless: true });
    client_page = await client_browser.newPage();
    await client_page.screenshot({ path: 'client_helloworld.png' });
  });

  afterAll(async () => {
    await client_browser.close();
  });
});

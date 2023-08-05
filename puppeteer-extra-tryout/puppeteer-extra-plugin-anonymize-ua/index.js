// puppeteer-extra is a drop-in replacement for puppeteer,
// it augments the installed puppeteer with plugin functionality.
// Any number of plugins can be added through `puppeteer.use()`
const puppeteer = require("puppeteer-extra");

// Add stealth plugin and use defaults (all tricks to hide puppeteer usage)
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
puppeteer.use(StealthPlugin());

puppeteer.launch({ headless: false, ignoreHTTPSErrors: true, }).then(async (browser) => {
  // const page = await browser.newPage();
  const page = (await browser.pages())[0];

  console.log(`Testing adblocker plugin..`);
  await page.goto("https://www.vanityfair.com");
  await page.waitForTimeout(1000);
  await page.screenshot({ path: "adblocker.png", fullPage: true });

  console.log(`Testing the stealth plugin..`);
  await page.goto("https://bot.sannysoft.com");
  await page.waitForTimeout(1000);
  await page.screenshot({ path: "stealth.png", fullPage: true });

  console.log(`Testing the poe.com plugin..`);
  await page.goto("https://poe.com/ChatGPT");
  await page.waitForTimeout(9999 * 1000)
  await page.waitForTimeout(1000);
  await page.screenshot({ path: "chatgpt.png", fullPage: true });

  console.log(`All done, check the screenshots. ✨`);
  await browser.close();
});

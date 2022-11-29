"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Full TypeScript support for both puppeteer and the DOM
exports.default = async ({ page }) => {
    // Full puppeteer API is available
    await page.goto('https://google.com/');
    await page.type('input[type="text"]', 'browserless.io');
    await Promise.all([
        page.click('input[type="submit"]'),
        page.waitForNavigation(),
    ]);
    // Logs show up in the browser's devtools
    console.log(`I show up in the page's console!`);
    const topLinks = await page.evaluate(() => {
        const results = document.querySelectorAll('a');
        return [...results].map(el => [el.innerText, el.getAttribute('href')]);
    });
    // Can pause by injecting a "debugger;" statement
    await page.evaluate(() => { debugger; });
    console.table(topLinks);
};

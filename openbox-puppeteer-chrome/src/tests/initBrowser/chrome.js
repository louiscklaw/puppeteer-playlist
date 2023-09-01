const { initChrome } = require('../../utils/initChrome');

console.log('start chrome js');

(async () => {
  try {
    const browser = await initChrome();
    const page = (await browser.pages())[0];

    await page.waitForTimeout(9999 * 1000);
  } catch (error) {
    console.log(error);
  }
})();

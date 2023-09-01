const { initFirefox } = require('../../utils/initFirefox');

console.log('start firefox js');

(async () => {
  try {
    const browser = await initFirefox();
    const page = (await browser.pages())[0];

    await page.waitForTimeout(9999 * 1000);
  } catch (error) {
    console.log(error);
  }
})();

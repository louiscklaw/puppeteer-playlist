const fs = require('fs');
const path = require('path');

const { toMatchImageSnapshot } = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });

const assertScreenShot = async (page, threshold) => {
  return expect(await page.screenshot()).toMatchImageSnapshot({
    failureThreshold: threshold,
  });
};

const assertScreenShotPct = async (page, percent = 0.01, actual_screen_shot_path = '/tmp') => {
  if (!fs.existsSync(actual_screen_shot_path)) fs.mkdirSync(actual_screen_shot_path);
  if (!fs.existsSync(`${actual_screen_shot_path}/.gitkeep`)) fs.writeFileSync(`${actual_screen_shot_path}/.gitkeep`, '');

  let actual_screenshot_filename = `${actual_screen_shot_path}/${Date.now()}-actual.png`;
  let actual_screenshot = await page.screenshot({ path: actual_screenshot_filename });
  console.log(`checking with actual screenshot filename ${actual_screenshot_filename}`);
  return expect(actual_screenshot).toMatchImageSnapshot({
    failureThreshold: percent,
    failureThresholdType: 'percent',
  });
};

// await assertElementScreenShotPct(
//   await manage_page.$('#restaurant-nav-button-column'),
//   0.02
// );
const assertElementScreenShotPct = async (element, percent = 0.01) => {
  return expect(await element.screenshot()).toMatchImageSnapshot({
    failureThreshold: percent,
    failureThresholdType: 'percent',
  });
};

module.exports = {
  assertScreenShot,
  assertScreenShotPct,
  assertElementScreenShotPct,
};

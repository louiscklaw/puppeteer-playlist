const headless = false;
const ignoreHTTPSErrors = true;

const puppeteer_options_mobile = {
  defaultViewport: { width: 375, height: 812 },
  ignoreHTTPSErrors,
  headless,
  args: [
    // '--window-size=400,400',
    // Required for Docker version of Puppeteer
    '--no-sandbox',
    '--disable-setuid-sandbox',
    // This will write shared memory files into /tmp instead of /dev/shm,
    // because Docker’s default for /dev/shm is 64MB
    '--disable-dev-shm-usage',
    '--disable-font-subpixel-positioning',
  ],
};

const puppeteer_options_desktop = {
  defaultViewport: { width: 1920, height: 1080 },
  ignoreHTTPSErrors,
  headless,
  args: [
    // '--window-size=400,400',
    // Required for Docker version of Puppeteer
    '--no-sandbox',
    '--disable-setuid-sandbox',
    // This will write shared memory files into /tmp instead of /dev/shm,
    // because Docker’s default for /dev/shm is 64MB
    '--disable-dev-shm-usage',
    '--disable-font-subpixel-positioning',
  ],
};

const puppeteer_options_ipad_9_7_portrait = {
  defaultViewport: { width: 768, height: 921 },
  ignoreHTTPSErrors,
  headless,
  args: [
    // '--window-size=400,400',
    // Required for Docker version of Puppeteer
    '--no-sandbox',
    '--disable-setuid-sandbox',
    // This will write shared memory files into /tmp instead of /dev/shm,
    // because Docker’s default for /dev/shm is 64MB
    '--disable-dev-shm-usage',
    '--disable-font-subpixel-positioning',
  ],
};

const puppeteer_options_ipad_9_7_landscape = {
  defaultViewport: { width: 921, height: 768 },
  ignoreHTTPSErrors,
  headless,
  args: [
    // '--window-size=400,400',
    // Required for Docker version of Puppeteer
    '--no-sandbox',
    '--disable-setuid-sandbox',
    // This will write shared memory files into /tmp instead of /dev/shm,
    // because Docker’s default for /dev/shm is 64MB
    '--disable-dev-shm-usage',
    '--disable-font-subpixel-positioning',
  ],
};

const puppeteer_options_ipad_portrait = {
  defaultViewport: { width: 1024, height: 1366 },
  ignoreHTTPSErrors,
  headless,
  args: [
    // '--window-size=400,400',
    // Required for Docker version of Puppeteer
    '--no-sandbox',
    '--disable-setuid-sandbox',
    // This will write shared memory files into /tmp instead of /dev/shm,
    // because Docker’s default for /dev/shm is 64MB
    '--disable-dev-shm-usage',
    '--disable-font-subpixel-positioning',
  ],
};

const puppeteer_options_ipad_landscape = {
  defaultViewport: { width: 1366, height: 1024 },
  ignoreHTTPSErrors,
  headless,
  args: [
    // '--window-size=400,400',
    // Required for Docker version of Puppeteer
    '--no-sandbox',
    '--disable-setuid-sandbox',
    // This will write shared memory files into /tmp instead of /dev/shm,
    // because Docker’s default for /dev/shm is 64MB
    '--disable-dev-shm-usage',
    '--disable-font-subpixel-positioning',
  ],
};

console.debug = jest.fn();

module.exports = {
  puppeteer_options_mobile,
  puppeteer_options_desktop,
  puppeteer_options_ipad_portrait,
  puppeteer_options_ipad_landscape,
  puppeteer_options_ipad_9_7_landscape,
  puppeteer_options_ipad_9_7_portrait,
};

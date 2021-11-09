const puppeteer = require("puppeteer");

let NETWORK_PRESETS = {
  OFFLINE: {
    offline: true,
    downloadThroughput: 0,
    uploadThroughput: 0,
    latency: 9999,
  },
  GPRS: {
    offline: false,
    downloadThroughput: (50 * 1024) / 8,
    uploadThroughput: (20 * 1024) / 8,
    latency: 500,
  },
  Regular2G: {
    offline: false,
    downloadThroughput: (250 * 1024) / 8,
    uploadThroughput: (50 * 1024) / 8,
    latency: 300,
  },
  Good2G: {
    offline: false,
    downloadThroughput: (450 * 1024) / 8,
    uploadThroughput: (150 * 1024) / 8,
    latency: 150,
  },
  Regular3G: {
    offline: false,
    downloadThroughput: (750 * 1024) / 8,
    uploadThroughput: (250 * 1024) / 8,
    latency: 100,
  },
  Good3G: {
    offline: false,
    downloadThroughput: (1.5 * 1024 * 1024) / 8,
    uploadThroughput: (750 * 1024) / 8,
    latency: 40,
  },
  Regular4G: {
    offline: false,
    downloadThroughput: (4 * 1024 * 1024) / 8,
    uploadThroughput: (3 * 1024 * 1024) / 8,
    latency: 20,
  },
  DSL: {
    offline: false,
    downloadThroughput: (2 * 1024 * 1024) / 8,
    uploadThroughput: (1 * 1024 * 1024) / 8,
    latency: 5,
  },
  WiFi: {
    offline: false,
    downloadThroughput: (30 * 1024 * 1024) / 8,
    uploadThroughput: (15 * 1024 * 1024) / 8,
    latency: 2,
  },
};

(async () => {
  const browser = await puppeteer.launch({
    defaultViewport: { width: 1920, height: 2080 },
    ignoreHTTPSErrors: true,
    headless: false,
  });
  // Create a new tab
  const page = await browser.newPage();

  // Connect to Chrome DevTools
  // https://chromedevtools.github.io/devtools-protocol/
  const client = await page.target().createCDPSession();

  // Set throttling property
  await client.send(
    "Network.emulateNetworkConditions",
    NETWORK_PRESETS.OFFLINE
  );

  await page.waitForTimeout(1 * 1000);

  // Navigate and take a screenshot
  await page
    .goto("https://fdalvi.github.io")
    .catch((err) => console.error("capture error due to network disconnect"));
  await page.screenshot({ path: "screenshot_offline.png" });

  await client.send("Network.emulateNetworkConditions", NETWORK_PRESETS.WiFi);

  await page.reload();
  await page.screenshot({ path: "screenshot_online.png" });

  await browser.close();
})();

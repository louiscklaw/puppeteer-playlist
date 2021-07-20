// import { WebHostPage } from "./pages/WebHostPage";
const WebHostPage = require("./pages/WebHostPage");
const path = require("path");

const BEFORE_CLOSE_DELAY_MILLISECS = 5000;
const INPUT_TEXT = "Hello World Puppeteer";

const getCurrentPage = async (browser) => {
  return (await browser.pages())[0];
};

describe("puppeteer jest page-object helloworld", () => {
  beforeEach(async () => {
    await page.goto("http://localhost:3000");
  });

  it(
    "should display a react logo",
    async () => {
      // Initialize WebHost page
      let webHostPage = new WebHostPage(await getCurrentPage(browser));

      await webHostPage.open();
      await webHostPage.typeToBox(INPUT_TEXT);

      await webHostPage.delay(BEFORE_CLOSE_DELAY_MILLISECS);
      await webHostPage.page.screenshot({ path: "screenshots/example.png" });
    },
    10 * 1000
  );
});

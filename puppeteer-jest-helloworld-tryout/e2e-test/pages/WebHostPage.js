module.exports = class WebHostPage {
  constructor(page) {
    this.page = page;
    this.TEXT_BOX = "//*[@name = 'textInput']";
  }

  open() {
    return this.page.goto("http://localhost:3000", {
      waitUntil: "domcontentloaded",
    });
  }

  getTitle() {
    return this.page.title();
  }

  async typeToBox(inputText) {
    await this.page.waitForXPath(this.TEXT_BOX);
    let textBoxElement = await this.page.$x(this.TEXT_BOX);
    await textBoxElement[0].type(inputText, { delay: 100 });
  }

  delay(time) {
    return new Promise(function (resolve) {
      setTimeout(resolve, time);
    });
  }
};

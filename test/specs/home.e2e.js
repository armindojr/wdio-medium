const { expect, browser, $, $$ } = require("@wdio/globals");

describe("Busca de informações", () => {
  it("Realizar uma busca", async () => {
    await browser.url("https://duckduckgo.com/");
    await $("#searchbox_input").setValue("webdriverio");
    await $('button[aria-label="Search"]').click();
    await $$('a[href="https://webdriver.io/"]')[0].click();
    await $(".hero__subtitle").waitForDisplayed({ timeout: 5000 });
    await expect(await browser.getTitle()).toContain("Next-gen");
  });
});

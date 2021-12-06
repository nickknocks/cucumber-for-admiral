var { defineSupportCode } = require("cucumber");
var { By, until, Key } = require("selenium-webdriver");
var seleniumWebdriver = require("selenium-webdriver");

defineSupportCode(function ({ Given, When, Then }) {
  Given("I am on the bookit website", () => {
    return this.driver.get("http://localhost:3001");
  });

  When("I book a room", () => {
    this.driver.findElement(By.id("bookit")).click();
  });

  Then("It's booked", () => {
    var xpath = "//*[contains(text(),'Booked!')]";
    var condition = seleniumWebdriver.until.elementLocated({ xpath: xpath });
    return this.driver.wait(condition, 2000);
  });
});

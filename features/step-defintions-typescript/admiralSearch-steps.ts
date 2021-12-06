var {defineSupportCode} = require('cucumber');
var {By, until, Key} = require('selenium-webdriver');
var seleniumWebdriver = require('selenium-webdriver');

defineSupportCode(function({Given, When, Then}) {
    Given('I am on {string}',  (site) => {
        return this driver.get(site);
    });

    When('I search for {string}',  (searchString) => {
        this.driver.findElement(By.name('q'))
            .sendKeys(searchString);
        this.driver.findElement(By.name('q'))
            .sendKeys(Key.ENTER);
    });

    Then('I see {string}',  (result) => {
        var xpath = "//*[contains(text(),'" + result + "')]";
        var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
        return this.driver.wait(condition, 5000);
    });
});

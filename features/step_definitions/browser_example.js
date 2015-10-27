var webdriver = require("selenium-webdriver");

module.exports = function() {
  this.Given(/^I visit url (.*)$/, function(url, callback) {
    // Express the regexp above with the code you wish you had.
    // `this` is set to a World instance.
    // i.e. you may use this.browser to execute the step:
    return this.driver.get(url);
    });

  this.When(/^I perform search operation$/, function(callback) {
    // Express the regexp above with the code you wish you had. Call callback() at the end
    // of the step, or callback.pending() if the step is not yet implemented:

    this.driver.findElement(webdriver.By.name('q')).sendKeys('webdriver');
    this.driver.findElement(webdriver.By.name('btnG')).click();
    this.driver.wait(function() {
     return this.driver.getTitle().then(function(title) {
       return title === 'webdriver - Google Search';
     });
    }, 1000);

    this.driver.quit();

    callback();
  });
};
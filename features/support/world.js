var webdriver = require("selenium-webdriver")

module.exports.World = function (callback) {
    console.log("Instantiating driver...")
    this.driver = new webdriver.Builder()
        .forBrowser('firefox')
        .build()


    this.bootFullTextSearchServer = function () {

    }

    this.createSomeProducts = function () {
    }

    this.emptyDatabase = function () {
    }

    this.shutdownFullTextSearchServer = function () {
    }

    callback()
}


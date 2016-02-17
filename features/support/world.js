var webdriver = require("selenium-webdriver")

function World() {

    console.log("Instantiating driver...")
    this.webdriver = webdriver
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
}

module.exports = function () {
    this.World = World
}


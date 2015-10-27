var webdriver = require("selenium-webdriver");

// TODO WIP
//var nock = require('nock');
//var http = require('http');

function World(callback) {

  console.log("Instantiating driver...")
  this.driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build()


//  TODO WIP
//  this.checkMock = function() {
//
//
//  var api = nock("http://javascriptplayground.com")
//      .get("/test/")
//      .reply(200, "Hello World");
//
//    console.log("Calling mock http...")
//    http.get("http://javascriptplayground.com/test/", function(resp) {
//      var str = "";
//      resp.on("data", function(data) {
//        str += data;
//      });
//      resp.on("end", function() {
//        console.log("Got Result: ", str);
//      });
//      resp.on("error", function(e) {
//              console.error(e);
//            });
//    });
//  }

this.bootFullTextSearchServer = function() {

}

this.createSomeProducts = function() {
}

this.emptyDatabase = function() {
}

this.shutdownFullTextSearchServer = function() {
}

  callback(); // tell Cucumber we're finished and to use 'this' as the world instance
}

module.exports = function() {
  this.World = World;
};

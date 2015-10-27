var nock = require("nock");
var http = require("http");

var api = nock("http://javascriptplayground.com")
          .get("/test/")
          .reply(200, "Hello Should work");

http.get("http://javascriptplayground.com/test/", function(resp) {
  var str = "";
  resp.on("data", function(data) { str += data; });
  resp.on("end", function() {
    console.log("Got Result: ", str);
  });
});
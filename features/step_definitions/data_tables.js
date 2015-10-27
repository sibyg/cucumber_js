assert = require('assert');

module.exports = function() {
    this.Given(/^a table step$/, {timeout: 60 * 1000}, function (table, callback) {
      expected = [
                  {'Product': 'Kettle', 'Price': '10GBP'},
                  {'Product': 'TV', 'Price': '50GBP'}

                ];
                assert.deepEqual(table.hashes(), expected)

      callback();
    });
}
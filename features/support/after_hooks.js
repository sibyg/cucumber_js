'use strict'

var myAfterHooks = function () {

  this.registerHandler('AfterFeatures', function (event, callback) {
    console.log('AfterFeatures')
    // clean up!
    // Be careful, there is no World instance available on `this` here
    // because all scenarios are done and World instances are long gone.
    //this.driver.quit()
    callback()
  })
}

module.exports = myAfterHooks
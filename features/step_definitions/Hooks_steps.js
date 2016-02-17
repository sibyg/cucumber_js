'use strict'

let myStepDefinitionsWrapper = function () {

    this.Given(/^system is in some pre event state$/, function (callback) {
        console.log('PreEventState')
        callback()
    })

    this.When(/^an event happens$/, function (callback) {
        console.log('Event')
        callback()
    })

    this.Then(/^system is in some post event state$/, function (callback) {
        console.log('PostEventState')
        callback()
    })
}
module.exports = myStepDefinitionsWrapper
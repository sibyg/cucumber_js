myAroundHooks = function () {
    this.Around(function (scenario, runScenario) {
        console.log('BeforeAroundScenario')
        // "this" is - as always - an instance of World promised to the scenario.

        // First do the "before scenario" tasks:

        //this.bootFullTextSearchServer()
        //this.createSomeProducts()

        // When the "before" duty is finished, tell Cucumber to execute the scenario
        // and pass a function to be called when the scenario is finished:

        // The first argument to runScenario is the error, if any, of the before tasks
        // The second argument is a function which performs the after tasks
        //   it can use callbacks, return a promise or be synchronous
        runScenario(null, function (callback) {
            // Now, we can do our "after scenario" stuff:

            //this.emptyDatabase()
            //this.shutdownFullTextSearchServer()
            console.log('AfterAroundScenario')

            // Tell Cucumber we're done:
            callback()
        })
    })
}

module.exports = myAroundHooks
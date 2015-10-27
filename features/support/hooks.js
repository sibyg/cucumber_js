var myHooks = function () {
  this.Before(function (scenario, callback) {
    // Just like inside step definitions, "this" is set to a World instance.
    // It's actually the same instance the current scenario step definitions
    // will receive.

    // Let's say we have a bunch of "maintenance" methods available on our World
    // instance, we can fire some to prepare the application for the next
    // scenario:

    this.bootFullTextSearchServer();
    this.createSomeProducts();

    // Don't forget to tell Cucumber when you're done:
    callback();
  });

  this.Before("@search", "@filter,@abc", function (scenario, callback) {
    // This hook will be executed before scenarios tagged with @foo and either
    // @bar or @baz.

    // ...

    callback();
  });

  this.After(function (scenario, callback) {
      // Again, "this" is set to the World instance the scenario just finished
      // playing with.

      // We can then do some cleansing:

      this.emptyDatabase();
      this.shutdownFullTextSearchServer();

      // Release control:
      callback();
    });
};

module.exports = myHooks;
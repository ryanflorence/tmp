var Ember = require('ember');

Ember.Handlebars.registerHelper('t', function(options) {
  return options.fn(this, options);
});


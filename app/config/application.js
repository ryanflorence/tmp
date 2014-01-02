var Ember = require('ember');
require('ic-styled');
require('ic-buttonset');

// App does not need to be on window, just helpful for dev/debug
var App = window.App = Ember.Application.create({
  LOG_ACTIVE_GENERATION: true,
  LOG_MODULE_RESOLVER: true,
  LOG_TRANSITIONS: true,
  LOG_TRANSITIONS_INTERNAL: true,
  LOG_VIEW_LOOKUPS: true
});

module.exports = App;


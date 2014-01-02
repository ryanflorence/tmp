var Ember = require('ember');
var ajax = require('ic-ajax');
require('../fixtures'); // comment out for real requests

module.exports = Ember.Route.extend({

  model: function() {
    return ajax('/course_selection');
  }

});




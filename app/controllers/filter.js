var Ember = require('ember');
var get = Ember.get;

var FilterController = Ember.ObjectController.extend({

  needs: ['application'],

  toggleOnAppController: function() {
    this.get('controllers.application').toggleFilter(this);
  }.observes('checked')

});

module.exports = FilterController;


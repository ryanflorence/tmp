var Ember = require('ember');
var get = Ember.get;

var FilterController = Ember.ObjectController.extend({

  needs: ['application'],

  toggleOnAppController: function() {
    this.get('controllers.application').toggleFilter(this);
  }.observes('checked'),

  key: function() {
    return this.get('parentController.name');
  }.property(),

  //deserializeChecked: function() {
  //}.observes('controllers.application.

});

module.exports = FilterController;


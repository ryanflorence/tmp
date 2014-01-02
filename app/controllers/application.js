var Ember = require('ember');
var fetch = require('../xhr/fetch');

var ApplicationController = Ember.ObjectController.extend({

  learningObjectUrl: '',

  learningObjects: [],

  contentFilters: [],

  selectedCategory: 'all',

  categories: function() {
    return fetch.array('/categories');
  }.property(),

  learningObjectUrl: function() {
    return '/learning_objects/'+this.get('selectedCategory');
  }.property('selectedCategory')

});

module.exports = ApplicationController;


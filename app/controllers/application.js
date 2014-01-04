var Ember = require('ember');
var fetch = require('../xhr/fetch');
var computed = Ember.computed;

var ApplicationController = Ember.ObjectController.extend({

  queryParams: ['selectedCategory', 'q'],

  q: function(key, val) {
    if (arguments.length > 1) {
      if ('' === val) val = null; 
      this.set('searchTerm', val);
    }
    var q = this.get('searchTerm');
    return q === true ? '' : q;
  }.property('searchTerm'),

  learningObjectUrl: '',

  learningObjects: [],

  contentFilters: [],

  selectedCategory: 'all',

  searchTerm: null,

  categories: function() {
    return fetch.array('/categories');
  }.property(),

  learningObjectUrl: function() {
    var params = {
      q: this.get('searchTerm')
    };
    var category = this.get('selectedCategory')
    return '/learning_objects/'+category+'?'+Ember.$.param(params);
  }.property('selectedCategory', 'searchTerm')

});

module.exports = ApplicationController;


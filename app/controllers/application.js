var Ember = require('ember');
var fetch = require('../xhr/fetch');
var computed = Ember.computed;
var get = Ember.get;

var ApplicationController = Ember.ObjectController.extend({

  queryParams: ['selectedCategory', 'q'],

  learningObjectUrl: '',

  learningObjects: [],

  contentFilters: fetch.array('/filters'),

  selectedCategory: 'all',

  searchTerm: null,

  filterIds: [],

  // workarounds for bug in queryParams see:
  // https://github.com/emberjs/ember.js/issues/4054
  q: function(key, val) {
    if (arguments.length > 1) {
      if ('' === val) val = null; 
      this.set('searchTerm', val);
    }
    var q = this.get('searchTerm');
    return q === true ? '' : q;
  }.property('searchTerm'),

  categories: function() {
    return fetch.array('/categories');
  }.property(),

  learningObjectUrl: function() {
    var params = {};
    if (this.get('searchTerm')) {
      params.q = this.get('searchTerm')
    };
    var category = this.get('selectedCategory')
    var url = '/learning_objects/'+category;
    if (Object.keys(params).length) {
     url += '?'+Ember.$.param(params);
    }
    return url;
  }.property('selectedCategory', 'searchTerm'),

  toggleFilter: function(filter) {
    var checked = get(filter, 'checked');
    var filters = this.get('filterIds');
    if (checked) {
      filters.addObject(get(filter, 'id'));
    } else {
      filters.removeObject(get(filter, 'id'));
    }
    filters.sort();
  }

});

module.exports = ApplicationController;


var Ember = require('ember');
var Filter = require('../models/filter');
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

  filters: [],

  //f: function(key, val) {
    //if (arguments.length > 1) {
      //console.log(val);
      //val.split('&').forEach(function(param) {
        //param = decodeURIComponent(param);
        //var split = param.split('=');
        //var id = split[1];
        //var filter = split[0].replace(/\[\]/, '');
        //console.log(id, filter);
      //});
    //}
    //return Ember.$.param(this.get('filterPairs'));
  //}.property('filterPairs.@each'),

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
    this.addSearchTermToUrl(params);
    this.addFiltersToUrl(params);
    var category = this.get('selectedCategory')
    var url = '/learning_objects/'+category;
    if (Object.keys(params).length) {
     url += '?'+Ember.$.param(params);
    }
    return url;
  }.property('selectedCategory', 'searchTerm', 'filters.@each'),

  filterPairs: function() {
    return this.get('filters').reduce(function(pairs, filter) {
      var key = filter.get('key');
      (pairs[key] || (pairs[key] = [])).push(filter.get('id'));
      return pairs;
    }, {});
  }.property('filters.@each'),

  addFiltersToUrl: function(params) {
    if (this.get('filters.length')) {
      Ember.merge(params, this.get('filterPairs'));
    }
  },

  addSearchTermToUrl: function(params) {
    if (this.get('searchTerm')) {
      params.q = this.get('searchTerm');
    }
  },

  toggleFilter: function(filter) {
    if (filter.get('checked')) {
      this.get('filters').addObject(filter);
    } else {
      this.get('filters').removeObject(filter);
    }
  }

});

module.exports = ApplicationController;


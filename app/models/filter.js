var Ember = require('ember');
var ajax = require('ic-ajax');

var Filter = Ember.Object.extend({

  checked: false,

  category: ''

}).reopenClass({

  loading: false,

  loaded: false,

  records: Ember.ArrayProxy.create({content: []}),

  url: '/filters',

  promise: function() {
    return this._promise;
  },

  find: function() {
    console.log('find');
    if (!this.loading && !this.loaded) {
      console.log('do this', this.url);
      this.loading = true;
      this._promise = ajax(this.url).then(
        this.addRecords.bind(this),
        this.onFindError.bind(this)
      ).then(this.setLoaded.bind(this));
    }
    return this.recordArray;
  },

  addRecords: function(records) {
    console.log('addRecords', records);
    this.records.addObjects(records);
    return this.records;
  },

  onFindError: function(err) {
    // handle that stuff
  },

  setLoaded: function(records) {
    this.loading = false;
    this.loaded = true;
    return records;
  }

});

module.exports = Filter;


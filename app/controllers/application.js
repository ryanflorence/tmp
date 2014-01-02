var Ember = require('ember');

var ApplicationController = Ember.ObjectController.extend({

  actions: {
    selectCategoryEveryone: function(isOn) {
      console.log('fooba');
    }
  }


});

module.exports = ApplicationController;


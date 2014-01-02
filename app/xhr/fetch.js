var ajax = require('ic-ajax');

module.exports = {
  array: function() {
    var arr = [];
    ajax.apply(ajax, arguments).then(function(res) {
      arr.addObjects(res);
    });
    return arr;
  },

  object: function() {
    var obj = [];
    ajax.apply(ajax, arguments).then(function(res) {
      obj.setProperties(res);
    });
    return obj;
  }
};


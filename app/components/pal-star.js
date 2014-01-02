var Ember = require('ember');

var PalStarComponent = Ember.Component.extend({

  tagName: 'span',

  total: 4,

  stars: 0,

  displayStars: function() {
    var stars = this.get('stars');
    var total = this.get('total');
    var display = new Array(stars + 1).join('★');
    if (stars < total) {
      display += new Array(total - stars + 1).join('☆');
    }
    return display.slice(0, total);
  }.property('stars')

});

module.exports = PalStarComponent;


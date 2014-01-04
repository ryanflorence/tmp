module.exports = function() {
  this.resource('application', {
    path: '/',
    queryParams: ['category']
  });
};


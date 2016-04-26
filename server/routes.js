var path = require('path');

module.exports = function (app) {
  // main site routes
  app.get('/', function(req, res) {
      res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
};

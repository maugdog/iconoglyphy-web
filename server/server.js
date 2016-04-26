var express = require('express');
var app = express();
var path = require('path');
var config = require('./config');

// Statis route for js, css, fonts, etc.
app.use('/assets', express.static('dist'));

// Load the routes
var routes = require('./routes')(app);

// If we get this far, time to send the 404 page
app.use(function(req, res) {
  res.send('This is not the route you\'re looking for!');
});

// Launch the server
var server = app.listen(config.server.httpPort, function () {
    console.log('Server listening at http://%s:%s', server.address().address, server.address().port);
});

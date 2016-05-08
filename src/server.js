var express = require('express');
var app = express();
var path = require('path');
var config = require('./config');

// Import React stuff
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './www/js/routes';
//import Routes from '../web-client/js/components/splash/FullScreenHero';

// Use handlebars as the view engine
var expressHbs = require('express-handlebars');
app.engine('hbs', expressHbs({extname:'hbs'}));
app.set('views', path.join(__dirname, './www/views'));
app.set('view engine', 'hbs');

app.use('/assets', express.static('./dist/assets'));

app.get('*', (req, res) => {
  match({ routes: routes, location: req.url }, (err, redirect, props) => {
    // in here we can make some decisions all at once
    if(err) {
      // there was an error somewhere during route matching
      res.status(500).send(err.message);
    } else if (redirect) {
      // we haven't talked about `onEnter` hooks on routes, but before a
      // route is entered, it can redirect. Here we handle on the server.
      res.redirect(redirect.pathname + redirect.search);
    } else if (props) {
      // if we got props then we matched a route and can render
      res.render('index', { pageContent: renderToString(<RouterContext {...props}/>) });
    } else {
      // no errors, no redirect, we just didn't match anything
      res.status(404).send('Not Found');
    }
  });
});

// Launch the server
var server = app.listen(config.server.httpPort, function () {
    console.log('Server listening at http://%s:%s', server.address().address, server.address().port);
});

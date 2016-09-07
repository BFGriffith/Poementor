// dependencies: Ø₪₪₪₪§╣ΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞ>
var express  = require('express');
var fs = require('fs');
var app      = express(); // create app with Express
var mongoose = require('mongoose'); // mongoose for MongoDB
var port  	 = process.env.PORT || 8080;
//var port = 8080;
//var database = require('./config/database'); // load the database config
var morgan   = require('morgan'); // log requests to the console (Express4)
var bodyParser = require('body-parser'); // pull information from HTML POST (express4)

// configuration:
//mongoose.connect(database.url); // connect to mongoDB database

app.use(express.static(__dirname + '/dist/client')); // set the static files location
app.use('/bower_components', express.static(__dirname + '/bower_components')); // set the static files location

app.use(morgan('dev')); // log requests to the console
app.use(bodyParser.urlencoded({'extended':'true'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

// ROUTES: »»——————————————————►
//require('./routes.js')(app);
app.get('/', function(req, res) {
  //app.use('./client/scripts/*');
  res.sendFile('.dist/client/index.html');
});

// listener (start application with node server.js) Ø₪₪₪₪§╣ΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞ>
app.listen(port);
console.log("application listening on port " + port);

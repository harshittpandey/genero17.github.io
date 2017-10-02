var express  = require('express') ;
var app      = express() ;
var port     = 4000 ;
var passport = require('passport') ;
var flash    = require('connect-flash') ;
var cookieParser = require('cookie-parser') ;
var bodyParser   = require('body-parser') ;
var session      = require('express-session') ;
var Sequelize = require('sequelize');
var config = require('./config/database.js');
var mysql = require('mysql') ;
//var password = config.password ? config.password : null;
var sequelize = new Sequelize(config.url, {
  port: 3306 ,
});

require('./config/passport')(passport); // pass passport for configuration

// set up our express application
//app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms

app.set('view engine', 'ejs'); // set up ejs for templating

// required for passport
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// routes ======================================================================
require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

// launch ======================================================================

app.listen(port);
console.log('The magic happens on port ' + port);

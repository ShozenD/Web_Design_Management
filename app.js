var createError = require('http-errors');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var config = require('./config');

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var session = require('express-session');

// Initialize application instance
var app = express();

// Session Middleware Setup
app.use(session({ resave:false, saveUninitialized:false, secret:'passport test' }));

// ===== Passport Setup =====
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: true,
  session: true
},function (req, username, password, done){
  process.nextTick(function(){
    if (username === 'test' && password === 'test' ){
      return done(null, username);
    } else {
      console.log('login error');
      return done(null, false, {message: 'パスワードが正しくありません。'});
    }
  });
}));

passport.serializeUser(function (user, done){
  done(null, user);
});

passport.deserializeUser(function (user, done){
  done(null, user);
})
// ===== end of Passport Setup =====

// Routing
const routes = require('./routes');

// Setting the logger
var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
var logger_format = `:date[${timezone}] ${config.app_name}[${process.pid}] :remote-addr - :remote-user ":method :url " :status :res[content-length] ":referrer" ":user-agent"`;
app.use(logger(logger_format));

// Enable CORS(security)
app.use(cors());

// Setting up body-parser here so it doesn't have to be set up in routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Importing all routes 
app.use('/', routes);

// MongoDB setup
mongoose.connect(config.getDbConnctionString(), {useNewUrlParser: true});

// Setting up the view engine and linking view files
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send({error: err});
});

module.exports = app;

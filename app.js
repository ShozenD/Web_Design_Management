var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();
//Store all HTML files in view folder. 
app.use(express.static(__dirname + '/View'));
//Store all JS and CSS in Scripts folder
app.use(express.static(__dirname + '/Script'));

app.get('/', function(req, res){
  res.sendFile('index.html');
  //It will find and locate index.html from View of Scripts
});

var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : process.env.RDS_HOSTNAME,
  user     : process.env.RDS_USERNAME,
  password : process.env.RDS_PASSWORD,
  port     : process.env.RDS_PORT
});

// Send Testform
app.get('/testform', function(req, res, next){

  var options = {
    root: __dirname + '/View/',
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  };

  var fileName = 'testform.html';
  res.sendFile(fileName, options, function(err){
    if(err){
      next(err);
    } else {
      console.log('Sent:', fileName);
    }
  });
});




app.use(logger('dev'));
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
  res.render('error');
});

module.exports = app;

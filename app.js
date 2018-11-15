// Import express and create application instance.
var express = require('express');
var app = express();
// MongoDB
var mongoose = require('mongoose');
var config = require('./config');
// Import controllers
var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');

app.use('/assets', express.static(__dirname + 'public'));

app.set('veiw engine', 'ejs');

mongoose.connect(config.getDbConnctionString(), {useNewUrlParser: true});


// Set up controllers
setupController(app);
apiController(app);


// Default Express Config
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

app.listen(port);
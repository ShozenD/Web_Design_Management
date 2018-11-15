// Import express and create application instance.
var express = require('express');
var app = express();
// MongoDB
var mongoose = require('mongoose');
var config = require('./config');
// Import controllers
var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');

var port = process.env.PORT || 3000; 

app.use('/assets', express.static(__dirname + 'public'));

app.set('veiw engine', 'ejs');

mongoose.connect(config.getDbConnctionString(), {useNewUrlParser: true});
setupController(app);
apiController(app);

app.listen(port);
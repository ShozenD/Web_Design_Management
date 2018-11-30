var addController = require('./addController');
var getController = require('./getController');
var delController = require('./delController');

module.exports = function(app){
    addController(app);
    getController(app);
    delController(app);
}
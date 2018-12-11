var configValues = require('./config');
var passportConfig = require('./passport');
var session = require("express-session")

module.exports = {

    getDbConnctionString: function() {
        var accessString = 'mongodb://' + configValues.username + ':' + configValues.password + '@ds121321.mlab.com:21321/student_records';
        return accessString;
    }
}
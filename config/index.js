var configValues = require('./config');

module.exports = {

    getDbConnctionString: function() {
        var accessString = 'mongodb://' + configValues.username + ':' + configValues.password + '@ds121321.mlab.com:21321/student_records';
        return accessString;
    }

}
var mongoose = require('mongoose');

// Create database model
var Schema = mongoose.Schema; 

var recordsSchema = new Schema({
    name: String,
    sex: String,
    school: String,
    grade: Number,
    comments: [{
        date: Date,
        body: String,
        hw: String,
        comments: String
    }]
});

var Records = mongoose.model('Records', recordsSchema);

module.exports = Records;
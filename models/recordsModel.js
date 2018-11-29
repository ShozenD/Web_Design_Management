var mongoose = require('mongoose');

// Create database model
var Schema = mongoose.Schema; 

var recordsSchema = new Schema({
    first_kanji: String, 
    last_kanji: String,
    first_katakana: String,
    last_katakana: String,
    school: String,
    grade: String,
    comments: [{
        date: Date,
        body: String,
        hw: String,
        comments: String
    }]
});

var Records = mongoose.model('Records', recordsSchema);

module.exports = Records;
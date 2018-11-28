var mongoose = require('mongoose');

// Create database model
var Schema = mongoose.Schema; 

var recordsSchema = new Schema({
    name: {
        first_kanji: String, 
        last_kanji: String,
        first_katakana: String,
        last_kantakana: String
    },
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
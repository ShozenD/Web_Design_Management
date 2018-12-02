var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var teacherSchema = new Schema({
    fnamekanji: String,
    lnamekanji: String,
    fnamekana: String,
    lnamekana: String,
    school: String
});

module.exports = mongoose.model('Teacher', teacherSchema);
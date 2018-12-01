mongoose = require('mongoose');

var Schema = mongoose.Schema;

var studentsSchema = new Schema({
    name: {
        fnamekanji: String,
        lnamekanji: String,
        fnamekana: String,
        lnamekana: String
    },
    school: String,
    grade: String,
    teacher_id: ObjectId
});

module.exports = mongoose.model('Students', studentsSchema);
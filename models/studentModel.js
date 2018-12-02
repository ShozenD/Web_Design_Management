var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var studentSchema = new Schema({
    name: {
        fnamekanji: String,
        lnamekanji: String,
        fnamekana: String,
        lnamekana: String
    },
    school: String,
    grade: String,
    teacher_id: { type: Schema.Types.ObjectId, ref: 'Teacher' },
    homework_id: [{ type: Schema.Types.ObjectId, ref: 'Homework'}],
    lecture_id: [{ type: Schema.Types.ObjectId, ref: 'Lecture'}]
});

module.exports = mongoose.model('Student', studentSchema);
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
    teacher_id: { type: Schema.Types.ObjectId, ref: 'Teacher' }
});

module.exports = mongoose.model('Student', studentSchema);
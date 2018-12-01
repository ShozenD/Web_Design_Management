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
    teacher_id: { type: Schema.Types.ObjectId, ref: 'Teachers' },
    homework_id: [{ type: Schema.Types.ObjectId, ref: 'Homeworks'}],
    lecture_id: [{ type: Schema.Types.ObjectId, ref: 'Lectures'}]
});

module.exports = mongoose.model('Students', studentsSchema);
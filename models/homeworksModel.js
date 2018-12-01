mongoose = require('mongoose');

var Schema = mongoose.Schema;

var homeworksSchema = new Schema({
    student_id: { type: Schema.Types.ObjectId, ref='Students' }, 
    teacher_id: { type: Schema.Types.ObjectId, ref='Teachers' },
    lecture_id: { type: Schema.Types.ObjectId, ref='Lectures' },
    title: String,
    date: Date,
    details: String,
    deadline: Date,
    evaluation: Number
});

module.exports = mongoose.model('Homeworks', homeworksSchema);
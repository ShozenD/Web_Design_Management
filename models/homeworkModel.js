var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var homeworkSchema = new Schema({
    student_id: { type: Schema.Types.ObjectId, ref: 'Student' }, 
    teacher_id: { type: Schema.Types.ObjectId, ref: 'Teacher' },
    lecture_id: { type: Schema.Types.ObjectId, ref: 'Lecture' },
    title: String,
    date: Date,
    details: String,
    deadline: Date,
    evaluation: Number
});

module.exports = mongoose.model('Homework', homeworkSchema);
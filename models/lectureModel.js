var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var lectureSchema = new Schema({
    student_id: { type: Schema.Types.ObjectId, ref: 'Student' },
    teacher_id: { type: Schema.Types.ObjectId, ref: 'Teacher'}, 
    date: Date,
    details: String, 
    comments: String
});

module.exports = mongoose.model('Lecture', lectureSchema);
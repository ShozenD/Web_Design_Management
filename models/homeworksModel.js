mongoose = require('mongoose');

var Schema = mongoose.Schema;

var homeworksSchema = new Schema({
    student_id: { type: Schema.Types.ObjectId, ref='Students' }, 
    teacher_id: { type: Schema.Types.ObjectId, ref='Teachers' },
    title: String,
    date: Date,
    details: String,
    deadline: Date,
    evaluation: Number
});

module.exports = mongoose.model('Homeworks', homeworksSchema);
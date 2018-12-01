mongoose = require('mongoose');

var Schema = mongoose.Schema;

var lecturesSchema = new Schema({
    student_id: { type: Schema.Types.ObjectId, ref='Students' },
    teacher_id: { type: Schema.Types.ObjectId, ref='Teachers'}, 
    date: Date,
    details: String,
    homework_id: { type: Schema.Types.ObjectId, ref='Homeworks'}, 
    comments: String
});

module.exports = mongoose.model('Lectures', lecturesSchema);
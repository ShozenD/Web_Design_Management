mongoose = require('mongoose');

var Schema = mongoose.Schema;

var teacherSchema = new Schema({
    name: {
        fnamekanji: String,
        lnamekanji: String,
        fnamekana: String,
        lnamekana: String
    },
    school: String,
    students: [{ type: Schema.Types.ObjectId, ref='Student'}]
});

module.exports = mongoose.model('Teacher', teacherSchema);
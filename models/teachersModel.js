mongoose = require('mongoose');

var Schema = mongoose.Schema;

var teachersSchema = new Schema({
    name: {
        fnamekanji: String,
        lnamekanji: String,
        fnamekana: String,
        lnamekana: String
    },
    school: String,
    students: [{ type: Schema.Types.ObjectId, ref='Students'}]
});

module.exports = mongoose.model('Teachers', teachersSchema);
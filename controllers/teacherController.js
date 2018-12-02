Teacher = require('../models/teacherModel');

module.exports = function(){

    function save(params, cb){
        // Create our first teacher
        var teacher = new Teacher(params);
        teacher.save(function (err, saved_teacher) {
            if (err) return cb(err);
            cb(null, saved_teacher);
        });

    }
}
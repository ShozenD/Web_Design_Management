Teacher = require('../models/teacherModel');

const TeacherController = {
    add: function(params, cb) {
        // Create a teacher
        console.log("teacherController saved called");
        
        var teacher = new Teacher(params);

        console.log("teacher: ", teacher);

        teacher.save(function (err, saved_teacher) {
            if (err) return cb(err);
            cb(null, saved_teacher);
        });
    }
}

module.exports = TeacherController;


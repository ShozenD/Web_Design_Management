Student = require('../models/studentModel');

const StudentController = {
    // Create new student
    save: function(params, cb) {
        var student = new Student(params);
        student.save(function (err, saved_student) {
            if (err) return cb(err);
            cb(null, saved_student);
        });
    },

    // Recieve a list of students
    index: function(params, cb) {
        Student.find(params, (err, index) => {
            if (err) return cb(err);
            cb(null, index);
        });
    }
}

module.exports = StudentController;
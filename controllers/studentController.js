Student = require('../models/studentModel');

const StudentController = {
    save: function(params, cb) {
        // Create a student
        console.log("studentController save method called");

        var student = new Student(params);

        console.log("studenet: ", student);

        student.save(function (err, saved_student) {
            if (err) return cb(err);
            cb(null, saved_student);
        });
    }
}

module.exports = StudentController;
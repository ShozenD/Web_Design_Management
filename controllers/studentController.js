Student = require('../models/studentModel');
Util = require('../util');

const StudentController = {
    // Create new student
    add: function(params, cb) {
        var student = new Student(params);
        student.save(function (err, saved_student) {
            if (err) return cb(err);
            cb(null, saved_student);
        });
    },

    // Obtain an index of students
    index: function(params, cb) {
        const legal_params = [
            "fnamekanji", 
            "fnamekana",
            "lnamekanji",
            "lnamekana",
            "teacher_id",
            "school",
            "grade"
        ];
        Student.find(Util.obj_filter(params, legal_params), (err, index) => {
            if (err) return cb(err);
            cb(null, index);
        });
    },

    // Obtain students by id
    id: (params, cb) => {
        const query = { _id: params }
        Student.find(query, (err, student) => {
            if(err) return cb(err);
            cb(null, student);
        });
    }
}

module.exports = StudentController;
Student = require('../models/studentModel');
Util = require('../util');

const StudentController = {
    // Create new student
    add: function(params, cb) {
        var student = new Student(params);
        
        student.save(function (err, saved_student) {
            if (err) return cb(err);
            console.log("student: ", saved_student);
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
    id: (id, cb) => {
        Student.findById(id, (err, student) => {
            if(err) return cb(err);
            cb(null, student);
        });
    },

    // Find student by id and update
    update: (id, params, cb) => {
        const options = {new: true}
        Student.findByIdAndUpdate(id, params, options, (err, update) => {
            if(err) return cb(err);
            cb(null, update);
        })
    } 
}

module.exports = StudentController;
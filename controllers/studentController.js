Student = require('../models/studentModel');
Util = require('../util');

const legal_params = [
    'fnamekanji',
    'lnamekanji',
    'fnamekana',
    'lnamekana',
    'school',
    'grade',
    'teacher_id'
];

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
    index: (params, cb) => {

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
        Student.findByIdAndUpdate(id, Util.obj_filter(params, legal_params), options, (err, update) => {
            if(err) return cb(err);
            cb(null, update);
        })
    } 
}

module.exports = StudentController;
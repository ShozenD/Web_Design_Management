Teacher = require('../models/teacherModel');
Util = require('../util');

const legal_params = [
    'fnamekanji',
    'lnamekanji',
    'fnamekana',
    'lnamekana',
    'school'
];

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
    },

    // Obtain an index of teachers
    index: (params, cb) => {
        Teacher.find(Util.obj_filter(params, legal_params), (err, index) => {
            if (err) return cb(err);
            cb(null, index);
        });
    },

    // Obtain teacher by id
    id: (id, cb) => {
        Teacher.findById(id, (err, teacher) => {
            if(err) return cb(err);
            cb(null, teacher);
        });
    },

    // Find teacher by id and update
    update: (id, params, cb) => {
        const options = {new: true}
        Teacher.findByIdAndUpdate(id, Util.obj_filter(params, legal_params), options, (err, update) => {
            if(err) return cb(err);
            cb(null, update);
        })
    } 
}

module.exports = TeacherController;


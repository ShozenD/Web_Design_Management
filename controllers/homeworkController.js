Homework = require('../models/homeworkModel');

const legal_params = [
    'student_id',
    'teacher_id',
    'lecture_id',
    'title',
    'date'
];

const HomeworkController = {
    add: function(params, cb) {
        // Give a homework
        console.log("homeworkController give method called");

        var homework = new Homework(params);

        console.log("homework: ", homework);

        homework.save(function (err, saved_homework){
            if(err) return cb(err);
            cb(null, saved_homework);
        });
    },

    // Obtain Homework by id
    id: (id, cb) => {
        Homework.findById(id, (err, student) => {
            if(err) return cb(err);
            cb(null, student);
        });
    },

    // Obtain a list of Homeworks
    index: (params, cb) => {
        Homework.find(Util.obj_filter(params, legal_params), (err, index) => {
            if (err) return cb(err);
            cb(null, index);
        });
    },
    
    // Find homework by id and update
    update: (id, params, cb) => {
        const options = {new: true}
        Homework.findByIdAndUpdate(id, Util.obj_filter(params, legal_params), options, (err, update) => {
            if(err) return cb(err);
            cb(null, update);
        })
    } 
}

module.exports = HomeworkController;
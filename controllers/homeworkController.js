Homework = require('../models/homeworkModel');

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

    index: (params, cb) => {
        const legal_params = [
            'student_id',
            'teacher_id',
            'lecture_id',
            'title',
            'date'
        ];
        Homework.find(Util.obj_filter(params, legal_params), (err, index) => {
            if (err) return cb(err);
            cb(null, index);
        });
    }
}

module.exports = HomeworkController;
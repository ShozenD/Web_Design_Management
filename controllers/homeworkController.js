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
    }
}

module.exports = HomeworkController;
Lecture = require('../models/lectureModel');
Util = require('../util');

const LectureController = {
    add: function(params, cb) {
        // Give a Lecture
        console.log("lectureController save method called");

        var lecture = new Lecture(params);

        console.log("lecture: ", lecture);

        lecture.save(function (err, saved_lecture) {
            if(err) return cb(err);
            cb(null, saved_lecture);
        });
    },

    // Obtain an index of lectures 
    index: (params, cb) => {
        const legal_params = [
            "student_id",
            "teacher_id",
            "date"
        ];
        Lecture.find(Util.obj_filter(params, legal_params), (err, index) => {
            if (err) return cb(err);
            cb(null, index);
        });
    }
}

module.exports = LectureController;
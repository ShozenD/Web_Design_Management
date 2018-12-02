Lecture = require('../models/lectureModel');

const LectureController = {
    save: function(params, cb) {
        // Give a Lecture
        console.log("lectureController save method called");

        var lecture = new Lecture(params);

        console.log("lecture: ", lecture);

        lecture.save(function (err, saved_lecture) {
            if(err) return cb(err);
            cb(null, saved_lecture);
        });
    }
}

module.exports = LectureController;
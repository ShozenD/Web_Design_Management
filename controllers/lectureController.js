Lecture = require('../models/lectureModel');
Util = require('../util');

const legal_params = [
    "student_id",
    "teacher_id",
    "date"
]

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
        Lecture.find(Util.obj_filter(params, legal_params), (err, index) => {
            if (err) return cb(err);
            cb(null, index);
        });
    },


    // Obtain lectures by id
    id: (id, cb) => {
        Lecture.findById(id, (err, student) => {
            if(err) return cb(err);
            cb(null, student);
        });
    },

    // Find lecture by id and update
    update: (id, params, cb) => {
        const options = {new: true}
        Lecture.findByIdAndUpdate(id, Util.obj_filter(params, legal_params), options, (err, update) => {
            if(err) return cb(err);
            cb(null, update);
        })
    } 
    
}

module.exports = LectureController;
Student = require('../models/studentModel');
Util = require('../util');

const StudentController = {
    // Create new student
    save: function(params, cb) {
        var student = new Student(params);
        student.save(function (err, saved_student) {
            if (err) return cb(err);
            cb(null, saved_student);
        });
    },

    // Recieve an index of students
    index: function(params, cb) {
        let legal_params = [
            "fnamekanji", 
            "fnamekana",
            "lnamekanji",
            "lnamekana",
            "teacher_id",
            "school",
            "grade"
        ];

        filtered_params = Util.obj_filter(params, legal_params);
      
        //Student.find(params, (err, index) => {
          //  if (err) return cb(err);
          //  cb(null, index);
        //});
    }
}

module.exports = StudentController;
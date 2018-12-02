var Homework = require('../models/homeworkModel');
var Lecture = require('../models/lectureModel');
var Student = require('../models/studentModel');
var Teacher = require('../models/teacherModel');
var bodyParser = require('body-parser');

module.exports = function(app) {

    app.get('/api/init-db', function(req, res){
        
        // Create our first teacher
        var hanako = new Teacher({
            name: {
                fnamekanji: '花子1',
                lnamekanji: '慶応',
                fnamekatakana: 'ハナコ',
                lnamekatakana: 'ケイオウ'
            },
            school: '慶應義塾大学',
            students: []
        });

        hanako.save(function (err) {
            if (err) return handleError(err);

            // Our first teacher now exists, so lets add a student
            var taro = new Student({
                name: {
                    fnamekanji: '太郎',
                    lnamekanji: '慶応',
                    fnamekatakana: 'タロウ',
                    lnamekatakana: 'ケイオウ'
                },
                school: '慶應義塾湘南藤沢高校',
                grade: 'm2',
                teacher_id: hanako._id, // adding the _id from our teacher hanako
                lecture_id: [],
                homework_id: []
            });

            taro.save(function (err){
                if (err) {
                    console.log('ERROR: ' + err);
                    throw err;
                } else {
                    res.send('SUCCESS');
                }
            });
        });
    });
}


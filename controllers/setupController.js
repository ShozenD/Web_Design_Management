var Homework = require('../models/homeworkModel');
var Lecture = require('../models/lectureModel');
var Student = require('../models/studentModel');
var Teacher = require('../models/teacherModel');

module.exports = function(app) {
    
    app.get('/api/setupRecords', function(req, res){
        // The process of seeding the database is below 

        // Create our first teacher
        var hanako = new Teacher({
            name: {
                fnamekanji: '花子',
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
                teacher_id: hanako._id, // assing the _id from our teacher hanako
                lecture_id: [],
                homework_id: []
            });

            taro.save(function (err){
                if (err) return handlError(err);
                // Hanako now has her own student
            });
        });

        //Our first student and teacher now exist so lets give the student a lecture and some homeworks
        var firstLecture = new Lecture({
            student_id: taro._id,
            teacher_id: hanako._id,
            date: Date.now(),
            details: '太郎くんは今日データベースの新たな構造を学び、その実装に取り組んだ',
            homework_id: '',
            comments: 'まだ完全に理解できていなく実装に苦しんでいる',
        });

        firstLecture.save(function (err) {
            if (err) return handleError(err);

            //We have our first lecture! lets add some homework
            var firstHomework = new Homework({
                student_id: taro._id,
                teacher_id: hanako._id,
                lecture_id: firstLecture._id,
                title: 'MongoDBにおけるデータベース構築方法',
                date: Date.now(),
                details: 'NodeJSを通してMongoDBでデータベースを初期化する',
                deadline: Date.now(),
                evaluation: 5
            });

            firstHomework.save(function (err){
                if (err) return handleError(err);
                //Taro now has homework!
            });
        });
    });
}


const teacherController = require('./controllers/teacherController');
const studentController = require('./controllers/studentController');
const lectureController = require('./controllers/lectureController');
const express = require('express');
const router = express.Router();

router.get('/api/init-db', function(req, res){
    var params = {
        name: {
            fnamekanji: '花子',
            lnamekanji: '慶応',
            fnamekana: 'ハナコ',
            lnamekana: 'ケイオウ'
        },
        school: '慶應義塾大学'
    }
    var teacher_id;
    var student_id;
    
    teacherController.save(params, (err, saved) => {
        if (err){
            console.log('Error: ', err);
            return res.sendStatus(500).send(err);
        } 
        console.log('Saved Teacher: ', saved);
        teacher_id = saved._id;

        // Add a student
        var params = {
            name: {
                fnamekanji: '太郎',
                lnamekanji: '慶応',
                fnamekana: 'タロウ',
                lnamekana: 'ケイオウ'
            },
            school: '慶應義塾湘南藤沢高校',
            grade: 'm2',
            teacher_id: teacher_id
        }

        studentController.save(params, (err, saved) => {
            if (err){
                console.log('Error: ', err);
                return res.sendStatus(500).send(err);
            } 
            console.log('Saved Teacher: ', saved);
            student_id = saved._id;

            // Add a lecture
            var params = {
                student_id: student_id,
                teacher_id: teacher_id,
                date: Date.now(),
                details: '太郎くんは今日データベースのモデルを学びました。',
                comments: '理解に苦しんでいるので次回また復習しなければいけません。'
            }

            lectureController.save(params, (err, saved) => {
                if (err){
                    console.log('Error: ', err);
                    return res.sendStatus(500).send(err);
                }
                console.log('Saved Lecture: ', saved);
                res.send(saved);
            });
        });
    });
});

module.exports = router; 


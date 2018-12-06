const teacherController = require('./controllers/teacherController');
const studentController = require('./controllers/studentController');
const lectureController = require('./controllers/lectureController');
const homeworkController = require('./controllers/homeworkController');
const express = require('express');
const router = express.Router();

///// routes for the view engine
// Front Page
router.get('/', (req, res)=>{
    res.render('index', {title: '生徒管理システム', message: 'トップページです'});
});


// Initialize Database (to be used only once)
router.get('/api/init-db', function(req, res){
    var params = {
        fnamekanji: '花子',
        lnamekanji: '慶応',
        fnamekana: 'ハナコ',
        lnamekana: 'ケイオウ',
        school: '慶應義塾大学'
    }
    var teacher_id;
    var student_id;
    
    teacherController.add(params, (err, saved) => {
        if (err){
            console.log('Error: ', err);
            return res.sendStatus(500).send(err);
        } 
        console.log('Saved Teacher: ', saved);
        teacher_id = saved._id;

        // Add a student
        var params = {
            fnamekanji: '太郎',
            lnamekanji: '慶応',
            fnamekana: 'タロウ',
            lnamekana: 'ケイオウ',
            school: '慶應義塾湘南藤沢高校',
            grade: 'm2',
            teacher_id: teacher_id
        }

        studentController.add(params, (err, saved) => {
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

            lectureController.add(params, (err, saved) => {
                if (err){
                    console.log('Error: ', err);
                    return res.sendStatus(500).send(err);
                }
                console.log('Saved Lecture: ', saved);
                var lecture_id = saved._id;

                // Add a homework
                var params = {
                    student_id: student_id,
                    teacher_id: teacher_id,
                    lecture_id: lecture_id,
                    title: 'データベースの復習',
                    date: Date.now(),
                    details: 'データベースモデルの勉強と復習を行うこと',
                    deadline: Date.now(),
                    evaluation: 5
                }

                homeworkController.add(params, (err, saved) => {
                    if (err){
                        console.log('Error: ', err);
                        return res.sendStatus(500).send(err);
                    }
                    console.log('Saved Homework: ', saved);
                    res.send(saved);
                });
            });
        });
    });
});

//// Student API ////
// get student index
router.get('/api/students/', (req, res) => {
    const params = req.query;
    studentController.index(params, (err, result) => {
        if (err) {
            console.log('Error: ', err);
            return res.sendStatus(400).send(err);
        }
        res.send(result);
    });
});

// get student by id
router.get('/api/students/:id', (req, res) => {
    studentController.id(req.params.id, (err, result) => {
        if (err) {
            console.log('Error: ', err);
            return res.sendStatus(400).send(err);
        }
        res.send(result);
    });
});

// add student
router.post('/api/students', (req, res) => {
    studentController.add(req.body, (err, saved) => {
        if (err) {
            console.log('Error: ', err); 
            return res.sendStatus(500).send(err);
        }
        res.send(saved);
    });
});

// update student info 
router.post('/api/students/:id/update', (req, res) => {
    studentController.update(req.params.id, req.body, (err, update) => {
        console.log(req.params.id);
        if(err) {
            console.log('Error: ', err);
            return res.sendStatus(500).send(err);
        }
        res.send(update);
    });
});

//// Teacher API ////
// get teacher index
router.get('/api/teachers', (req, res) => {
    const params = req.query;
    teacherController.index(params, (err, result) => {
        if(err) {
            console.log('Error: ', err);
            return res.sendStatus(400).send(err);
        }
        res.send(result);
    });
});

// get teacher by id
router.get('/api/teachers/:id', (req, res) => {
    teacherController.id(req.params.id, (err, result) => {
        if (err) {
            console.log('Error: ', err);
            return res.sendStatus(400).send(err);
        }
        res.send(result);
    });    
});

// add teacher
router.post('/api/teachers', (req, res) => {
    teacherController.add(req.body, (err, saved) => {
        if(err) {
            console.log('Error: ', err); 
            return res.sendStatus(500).send(err);
        }
        res.send(saved);
    });
});

// update teacher info 
router.post('/api/teachers/:id/update', (req, res) => {
    console.log(req.params.id);
    teacherController.update(req.params.id, req.body, (err, update) => {
        if(err) {
            console.log('Error: ', err);
            return res.sendStatus(500).send(err);
        }
        res.send(update);
    });
});

//// Lecture API ////
// get lecture index
router.get('/api/lectures', (req, res) => {
    const params = req.query;
    lectureController.index(params, (err, result) => {
        if(err) {
            console.log('Error: ', err);
            return res.sendStatus(400).send(err);
        }
        res.send(result);
    });
});

// get lecture by id
router.get('/api/lectures/:id', (req, res) => {
    lectureController.id(req.params.id, (err, result) => {
        if (err) {
            console.log('Error: ', err);
            return res.sendStatus(400).send(err);
        }
        res.send(result);
    });    
});

// add lectures
router.post('/api/lectures', (req, res) => {
    lectureController.add(req.body, (err, saved) => {
        if(err) {
            console.log('Error: ', err); 
            return res.sendStatus(500).send(err);
        }
        res.send(saved);
    });
});

// update lecture info 
router.post('/api/lectures/:id/update', (req, res) => {
    console.log(req.params.id);
    lectureController.update(req.params.id, req.body, (err, update) => {
        if(err) {
            console.log('Error: ', err);
            return res.sendStatus(500).send(err);
        }
        res.send(update);
    });
});

//// Homework API ////
// get homework index
router.get('/api/homeworks', (req, res) => {
    const params = req.query;
    homeworkController.index(params, (err, result) => {
        if(err) {
            console.log('Error: ', err);
            return res.sendStatus(400).send(err);
        }
        res.send(result);
    });
});

// get homework by id
router.get('/api/homeworks/:id', (req, res) => {
    homeworkController.id(req.params.id, (err, result) => {
        if (err) {
            console.log('Error: ', err);
            return res.sendStatus(400).send(err);
        }
        res.send(result);
    });    
});

// add homework
router.post('/api/homeworks', (req, res) => {
    homeworkController.add(req.body, (err, saved) => {
        if(err){
            console.log('Error: ', err);
            return res.sendStatus(500).send(err);
        }
        res.send(saved);
    });
});

//update homework
router.post('/api/homeworks/:id/update', (req, res) => {
    console.log(req.params.id);
    homeworkController.update(req.params.id, req.body, (err, update) => {
        if(err) {
            console.log('Error: ', err);
            return res.sendStatus(500).send(err);
        }
        res.send(update);
    });
});

module.exports = router; 


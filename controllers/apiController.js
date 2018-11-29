var Records = require('../models/recordsModel');
var bodyParser = require('body-parser');
var cors = require('cors');

module.exports = function(app){

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // Get records by name
    app.get('/api/records/', function(req, res){

        Records.find({ $and: [{ first_katakana: req.body.first_katakana }, {last_katakana: req.body.last_katakana}] },
            function(err, rec) {
                if (err) {
                    res.send('Cannot Find Student');
                    throw err;
                };
                res.send(rec);
            });
    });

    // Add student
    app.options('/api/records/add_student', cors()) // enable pre-flight request for POST request
    app.post('/api/records/add_student', function(req, res) {
        
        var newStudent = Records({
            first_kanji,
            last_kanji,
            first_katakana,
            last_katakana,
            school: req.body.school,
            grade: req.body.grade,
            comments: []
        });
        
        newStudent.save(function(err) {
            if (err) throw err;

            res.send('Success');
        });
    });

    // Delete Student
    app.delete('/api/records/del_student', function(req, res) {
        
        Records.findOneAndDelete({ $and: [{first_katakana: req.body.first_katakana}, {last_katakana: req.body.last_katakana}] }, function(err){
            if (err) throw err;
            res.send('Success');
        });
    });

    // Get class records
    app.get('/api/records/get_recs/', cors(), function(req, res) {

        Records.find({ $and: [{first_katakana: req.body.first_katakana, last_katakana: req.body.last_katakana}] }, function(err, rec){
            if (err) {
                res.send('Cannot Find Student');
                throw err;
            }
            res.send(rec[0].comments);
        });
    });

    // Add class record
    app.post('/api/records/add_rec/', function(req, res) {
        
        var newRecord = {
            date: Date.parse(req.body.date),
            body: req.body.body,
            hw: req.body.hw,
            comments: req.body.comments
        }

        Records.findOneAndUpdate({ $and: [{first_katakana: req.body.first_katakana, last_katakana: req.body.last_katakana}] }, { $push: {comments: newRecord }}, function(err) {
            if (err) throw err;
            res.send('Success');
        });
    })
}
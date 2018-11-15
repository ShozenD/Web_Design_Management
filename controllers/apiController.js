var Records = require('../models/recordsModel');
var bodyParser = require('body-parser');

module.exports = function(app){

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // Get records by name
    app.get('/api/records/:name', function(req, res){

        Records.find({ name: req.params.name },
            function(err, rec) {
                if (err) throw err;
                res.send(rec);
            });
    });

    // Add student
    app.post('/api/records/add_student', function(req, res) {
        
        var newStudent = Records({
            name: req.body.name,
            sex: req.body.sex,
            school: req.body.school,
            grade: req.body.grade,
            comments: [{
                date: Date.now(),
                body: req.body.comments[0].body,
                hw: req.body.comments[0].hw,
                comments: req.body.comments[0].comments
            }]
        });
        newStudent.save(function(err) {
            if (err) throw err;

            res.send('Success');
        });
    });

    // Delete Student
    app.delete('/api/records/del_student', function(req, res) {
        
        Records.findOneAndDelete(req.body.name, function(err){
            if (err) throw err;
            res.send('Success');
        });
    });

    // Get class records
    app.get('/api/records/get_recs/:name', function(req, res) {

        Records.find({ name: req.params.name }, function(err, rec){
            if (err) throw err;
            res.send(rec[0].comments);
        });
    });

    // Add class record
    app.post('/api/records/add_rec/:name', function(req, res) {
        
        var newRecord = {
            date: Date.now(),
            body: req.body.body,
            hw: req.body.hw,
            comments: req.body.comments
        }

        Records.findOneAndUpdate({ name: req.params.name }, { $push: {comments: newRecord }}, function(err) {
            if (err) throw err;
            res.send('Success');
        });
    })
}
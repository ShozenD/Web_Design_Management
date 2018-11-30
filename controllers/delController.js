var Records = require('../models/recordsModel');
var bodyParser = require('body-parser');

module.exports = function(app){
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // Delete Student
    app.delete('/api/records/del_student', function(req, res) {
        Records.findOneAndDelete({ $and: [{first_katakana: req.body.first_katakana}, {last_katakana: req.body.last_katakana}] }, function(err){
            if (err) throw err;
            res.send('Success');
        });
    });
};
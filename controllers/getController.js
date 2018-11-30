var Records = require('../models/recordsModel');
var bodyParser = require('body-parser');
var cors = require('cors');    
    
module.exports = function(app){
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // Get student info by name
    app.get('/api/records/:fnamekatakana-:lnamekatakana', function(req, res){

        Records.find({ $and: [{ first_katakana: req.params.fnamekatakana }, {last_katakana: req.params.lnamekatakana}] },
            function(err, rec) {
                if (err) {
                    res.send('Cannot Find Student');
                    throw err;
                };
                res.send(rec);
            });
    });

    // Get class records by name
    app.get('/api/records/get_recs/:fnamekatakana-:lnamekatakana', cors(), function(req, res) {
        Records.find({ $and: [{first_katakana: req.params.fnamekatakana, last_katakana: req.params.lnamekatakana}] }, function(err, rec){
            if (err) {
                res.send('Cannot Find Student');
                throw err;
            }
            res.send(rec[0].comments);
        });
    });

    // Get all studnet by grade
    app.get('api/records/get_grade/:grade', cors(), function(req, res) {
        Records.find({}, function(err, rec){
            if (err) {
                res
            }
        });
    });
};
    
var Records = require('../models/recordsModel');

module.exports = function(app) {
    
    app.get('/api/setupRecords', function(req, res){

        // seed database
        var starterRecords = [
            {
                name: 'Shozen Dan',
                sex: 'Male',
                school: 'Keio University',
                grade: 2,
                comments: [{
                    date: Date.now(),
                    body: 'Studied and created an API today',
                    hw: 'Write the documentation for the API he created',
                    comments: 'He seems very busy with Mita Festival comming up next week'
                }]
            },
            {
                name: 'Kasumi Dan',
                sex: 'Female',
                school: 'Tokyo Metropolitan University',
                grade: 4,
                comments: [{
                    date: Date.now(),
                    body: 'Worked on IOT today',
                    hw: 'Write the documentation for the IOT system she created',
                    comments: 'She is constantly busy with work'
                }]
            }
        ];
        Records.create(starterRecords, function(err, results) {
            res.send(results);
        });
    });
    
}


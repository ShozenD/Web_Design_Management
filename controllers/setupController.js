var Records = require('../models/recordsModel');

module.exports = function(app) {
    
    app.get('/api/setupRecords', function(req, res){

        // seed database
        var starterRecords = [
            {
                first_kanji: '暁然', 
                last_kanji: '段',
                first_katakana: 'ショウゼン',
                last_katakana: 'ダン',
                school: 'Keio University',
                grade: 'u',
                comments: [{
                    date: Date.now(),
                    body: 'Studied and created an API today',
                    hw: 'Write the documentation for the API he created',
                    comments: 'He seems very busy with Mita Festival comming up next week'
                }]
            },
            {
                first_kanji: '霞', 
                last_kanji: '段',
                first_katakana: 'カスミ',
                last_katakana: 'ダン',
                school: 'Tokyo Metropolitan University',
                grade: 'u',
                comments: [{
                    date: Date.now(),
                    body: 'Worked on IOT today',
                    hw: 'Write the documentation for the IOT system she created',
                    comments: 'She is constantly busy with work'
                }]
            },
            {
                first_kanji: '暁依', 
                last_kanji: '段',
                first_katakana: 'アキエ',
                last_katakana: 'ダン',
                school: 'Tokyo Gakugei University International Secondary School',
                grade: 's2',
                comments: [{
                    date: Date.now(),
                    body: 'She Worked on her geography knowledge today.',
                    hw: 'Prepare for midterm tests',
                    comments: 'She is doing a good job at memorizing the names of countries.'
                }]
            }
        ];
        Records.create(starterRecords, function(err, results) {
            res.send(results);
        });
    });
    
}


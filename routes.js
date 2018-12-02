const teacherController = require('./controllers/teacherController');

module.exports = function(app){
    app.get('/api/init-db', function(req, res){
        var params = {
            name: {
                fnamekanji: '花子',
                lnamekanji: '慶応',
                fnamekana: 'ハナコ',
                lnamekana: 'ケイオウ'
            },
            school: '慶應義塾大学',
            students: []
        }

        teacherController.save(params, function(err, saved){
            if (err){
                console.log('Error: ', err);
                res.sendStatus(500).send(err);
            } else {
                console.log('Saved Teacher: ', saved);
                res.send(saved);
            }
        });
    });
}

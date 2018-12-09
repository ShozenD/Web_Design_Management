var User = require('../models/authModel');

const authController = {
    // Create New User
    create: (params, cb)=>{
        if(params.email &&
        params.username &&
        params.password &&
        params.passwordConf){
            var userData = {
                email: params.email,
                username: params.username,
                password: params.password,
                passwordConf: params.passwordConf
            };
            console.log("User Data: ", userData);
            // Insert data into the db
            User.create(userData, function (err, user) {
                if (err) { return cb(err); } 
                return cb(null, user);
            });
        }
    },
    // Login 
    login: (params, cb)=>{
        User.statics.authenticate(params.username, params.password, (result)=>{
            return cb(result);
        })
    }
}

module.exports = authController;
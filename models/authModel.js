const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

var UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true 
    },
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    passwordConf: {
        type: String,
        required: true
    }
});

// Hashing a password before saving it to the database
UserSchema.pre('validate', function(next) {
    console.log('User Schema: ', this);
    var user = this;
    bcrypt.hash(user.password, 10, (err, hash)=>{
        if(err){ 
            return next(err); 
        }
        user.password = hash;
        next();
    });
});

UserSchema.statics.authenticate = function (email, password, callback){
    User.findOne({ email: email })
    .exec(function (err, user) {
        if(err){
            return callback(err);
        } else if (!user){
            var err = new Error('User not found');
            err.status = 401;
            return callback(err);
        }
        bcrypt.compare(password. user.password, function(err, result){
            if (result == true){
                return callback(null, user);
            } else {
                return callback();
            }
        });
    });
}


var User = mongoose.model('User', UserSchema);
module.exports = User;
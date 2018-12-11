const mongoose = require('mongoose');
var passport = require('passport'), LocalStrategy = require('passport-local');

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


var User = mongoose.model('User', UserSchema);
module.exports = User;
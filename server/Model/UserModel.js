const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:false
    },
    gender: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        reuiqred: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    location:{
        type:String,
        required:false
    },
    bio:{
        type:String,
        required:false
    },
    profilePicture: {
        type: String,
        required: true
    },
    followers:{
        type:Array,
        required:false
    },
    following:{
        type:Array,
        required:false
    },
    posts:{
        type:Array,
        required:false
    },
    favbikes:{
        type:Array,
        required:false
    },
    events:{
        type:Array,
        required:false
    },
    achievements:{
        type:Array,
        required:false
    },
    savedPost:{
        type:Array,
        required:false
    },
});

const UserModel = mongoose.model('user', UserSchema);

module.exports = {UserModel};
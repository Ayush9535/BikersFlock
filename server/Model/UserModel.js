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
    followers:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'users',
            required:false
        }
    ],
    following:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'users',
            required:false
        }
    ],
    posts:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'posts',
            required:false
        }
    ],
    favbikes:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'bikes',
            required:false
        }
    ],
    events:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'events',
            required:false
        }
    ],
    achievements:{
        type:Array,
        required:false
    },
    savedPost:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'posts',
            required:false
        }
    ],
} , {timestamps: true});

const UserModel = mongoose.model('users', UserSchema);

module.exports = {UserModel};
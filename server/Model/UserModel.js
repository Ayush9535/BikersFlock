const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
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
    gender: {
        type: String,
        required: true
    },
    profileImage: {
        type: String,
        required: true
    }
});

const UserModel = mongoose.model('user', UserSchema);

module.exports = {UserModel};
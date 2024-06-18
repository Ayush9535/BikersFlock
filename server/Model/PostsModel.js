const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    location:{
        type: String,
        required: true
    },
    postImage : {
        type: String,
        required: true
    },
    caption:{
        type: String,
        required: true
    },
    likeCount:{
        type: Number,
        required: true
    },
    commentCount:{
        type: Number,
        required: true
    },
},{timestamps:true});

const PostModel = mongoose.model('posts' , PostSchema)

module.exports = { PostModel }

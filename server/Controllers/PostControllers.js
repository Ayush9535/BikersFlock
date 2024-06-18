const { model } = require('mongoose');
const { PostModel } = require('../Model/PostsModel');

const addPost = async (req, res) => {
    try {
        const { location, postImage, caption } = req.body;
        const post = new PostModel({ user:req.user._id , location, postImage, caption, likeCount:0, commentCount:0 });
        await post.save();
        res.status(200).json(post);
    } catch (error) {
        console.log("Error in addPost : ", error.message)
        res.status(500).json("Error in adding post");
    }
}

module.exports = { addPost }
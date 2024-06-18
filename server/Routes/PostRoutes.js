const express = require("express")
const PostRouter = express.Router()
const { addPost } = require("../Controllers/PostControllers")

PostRouter.get("/addpost", addPost)

module.exports = PostRouter
const express = require("express")
const UserRouter = express.Router()
const { getUserById } = require("../Controllers/UserControllers.js")

UserRouter.get("/user/:id", getUserById)

module.exports = UserRouter
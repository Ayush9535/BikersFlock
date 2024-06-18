const jwt = require('jsonwebtoken')
const { UserModel } = require('../Model/UserModel.js')
require("dotenv").config();

const protectedRoute = async (req,res,next) =>{
    try {
        const token = req.cookies.token
        if(!token){
            res.status(401).json({message:"Token not found..!!"})
        }

        let decoded = jwt.verify(token,process.env.JWT_SECRET)
        if (!decoded){
            res.status(401).json({message:"Token not decoded..!!"})
        }

        let user = await UserModel.findOne({username : decoded.username})
        if(!user){
            res.status(401).json({message:"User not found..!!"})
        }

        req.user = user
        next()
        
    } catch (error) {
        console.log("User not loggedin..!!")
        res.status(401).json({message:"User not loggedin..!!"})
    }
}

module.exports = { protectedRoute }
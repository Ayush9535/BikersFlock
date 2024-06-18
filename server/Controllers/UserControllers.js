const { UserModel } = require('../Model/UserModel.js');

const getUserById = async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id).populate('posts')
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }
        res.status(200).json(user)
    } catch (error) {
        console.log("Error in getUserById : ", error.message)
        res.status(500).json({ message: "Error is getting user" })
    }
}

module.exports = { getUserById }
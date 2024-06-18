const { ConversationModel } = require('../Model/ConversationModel.js')

const getConversations = async (req, res) => {
    try {
        const conversations = await ConversationModel.find({ members: req.user._id }).populate("users")
        if (!conversations) return res.status(200).json([])
        res.status(200).json({ conversations })
    } catch (error) {
        console.log("Error in getConversations", error.message)
        res.status(500).json({ message: "Error in getting conversations"})
    }
}

module.exports = { getConversations }
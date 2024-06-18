const { ConversationModel } = require('../Model/ConversationModel.js')

const getConversations = async (req, res) => {
    try {
        const conversations = await ConversationModel.find({ members: req.user._id }).populate("members" , "username email")
        if (!conversations) return res.status(200).json([])

        let users = [];
        conversations.forEach(conversation => {
            conversation.members.forEach(member => {
                if (member._id.toString() !== req.user._id.toString()) {
                    users.push(member);
                }
            });
        });

        res.status(200).json(users)
    } catch (error) {
        console.log("Error in getConversations", error.message)
        res.status(500).json({ message: "Error in getting conversations"})
    }
}

module.exports = { getConversations }
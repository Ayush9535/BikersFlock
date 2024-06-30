const EventModel = require("../Model/EventsModel")

const getAllEvents = async (req, res) => {
    try{
        const events = await EventModel.find({});
        res.json(events)
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

module.exports = {getAllEvents}
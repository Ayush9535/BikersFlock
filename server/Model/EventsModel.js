const mongoose = require("mongoose")

const EventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    fee: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
})

const EventModel = mongoose.model("events", EventSchema)

module.exports = EventModel
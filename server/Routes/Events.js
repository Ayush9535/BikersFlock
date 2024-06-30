const express = require('express');
const {getAllEvents} = require("../Controllers/EventControllers")
const EventRouter = express.Router();

EventRouter.get("/events" , getAllEvents);

module.exports = { EventRouter };
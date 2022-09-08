const mongoose = require("mongoose");
const schema = require("../schemas/EventSchema");

const EventModel = mongoose.model("Event", schema);

module.exports = EventModel;

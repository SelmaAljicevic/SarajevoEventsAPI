const mongoose = require("mongoose");
const { Schema } = mongoose;

const EventSchema = new Schema({
  place: String,
  text: String,
});

module.exports = EventSchema;

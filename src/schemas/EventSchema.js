import mongoose from "mongoose";
const { Schema } = mongoose;

export const EventSchema = new Schema({
  name: String,
  place: String,
  description: String,
  image_url: String,
  category: String,
  popularity: Number,
});

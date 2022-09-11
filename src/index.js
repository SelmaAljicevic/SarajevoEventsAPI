import mongoose from "mongoose";
import bodyParser from "body-parser";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { webRouter } from "./routes/index.js";

const app = express();
dotenv.config();

const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Database connected.");
      // events.forEach((e) => {
      //   const event = new EventModel(e);
      //   event.save();
      // });
    })
    .catch("Database connection error");
};

connectDB();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (_req, res) => res.send("Server is running"));

// set up routes
app.use("/api/v1", webRouter);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server running on port: localhost:${port}.`);
});

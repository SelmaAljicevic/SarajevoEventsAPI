import mongoose from "mongoose";

import { EventSchema } from "../schemas/EventSchema.js";

export const EventModel = mongoose.model("Event", EventSchema);

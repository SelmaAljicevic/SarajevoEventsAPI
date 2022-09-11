import { Router } from "express";

import { eventRouter } from "./event.route.js";

const router = Router();

router.use("/events", eventRouter);

export const webRouter = router;

import { Router } from "express";

import {
  getFilteringPipelines,
  getPaginationWithCount,
  getSortingPipelines,
} from "../helpers/queryBuilders.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { QueryModel } from "../classes/QueryModel.js";
import { EventModel } from "../models/EventModel.js";

const router = Router();

router.get("/", async (req, res) => {
  const query = new QueryModel(req.query).getParams();

  const queryPipelines = [
    ...getFilteringPipelines(query),
    ...getSortingPipelines(query),
    ...getPaginationWithCount(query),
  ];

  const [response] = await EventModel.aggregate(queryPipelines);

  return res.json({
    list: response.list,
    total: response.total[0].total,
  });
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;

  const event = await EventModel.findById(id);

  return res.json({ event, status: 200 });
});

router.post("/", authMiddleware, async (req, res) => {
  if (res.statusCode === 403) return res.send("Forbbiden");

  const event = new EventModel(req.body);
  await event.save();
  return res.json({ event: event, status: 201 });
});

router.patch("/:id", authMiddleware, async (req, res) => {
  if (res.statusCode === 403) return res.send("Forbbiden");

  const event = await EventModel.findByIdAndUpdate(req.params.id, req.body);

  if (!event) return res.json({ event: null, status: 404 });

  return res.json({ event, status: 204 });
});

router.delete("/:id", authMiddleware, async (req, res) => {
  if (res.statusCode === 403) return res.send("Forbbiden");

  const id = req.params.id;

  const event = await EventModel.findByIdAndDelete(id);

  res.json({ event, status: 204 });
});

export const eventRouter = router;

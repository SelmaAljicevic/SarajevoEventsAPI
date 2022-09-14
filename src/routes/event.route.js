import { Router } from "express";

import { createQuery } from "../helpers/createQuery.js";
import { QueryModel } from "../classes/QueryModel.js";
import { EventModel } from "../models/EventModel.js";

const router = Router();

router.get("/", async (req, res) => {
  const query = new QueryModel(req.query);

  const dbQuery = createQuery(query.getParams(), false);
  const countDbQuery = createQuery(query.getParams(), false);

  const queryParams = query.getParams();

  if (req.query.category) {
    // dbQuery.push({ $match: { category: req.query.category } });
    countDbQuery.push({ $match: { category: req.query.category } });
  }

  dbQuery.push([
    { $skip: queryParams.pageSize * (queryParams.pageNumber - 1) },
    { $limit: parseInt(queryParams.pageSize) },
  ]);

  countDbQuery.push({ $count: "total" });

  const events = await EventModel.aggregate(dbQuery);
  const count = await EventModel.aggregate(countDbQuery);

  return res.json({ list: events, total: count[0]?.total, status: 200 });
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;

  const event = await EventModel.findById(id);

  return res.json({ event, status: 200 });
});

router.put("/", async (req, res) => {
  const event = new EventModel(req.body);
  await event.save();
  return res.json({ event: event, status: 201 });
});

router.patch("/:id", async (req, res) => {
  const event = await EventModel.findByIdAndUpdate(req.params.id, req.body);

  if (!event) return res.json({ event: null, status: 404 });

  return res.json({ event, status: 204 });
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  const event = await EventModel.findByIdAndDelete(id);

  res.json({ event, status: 204 });
});

export const eventRouter = router;

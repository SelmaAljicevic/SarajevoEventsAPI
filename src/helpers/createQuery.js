import { SORT_ORDER } from "../enums/sort.enum.js";

export const createQuery = (
  model,
  { pageNumber, pageSize, sortBy, order, filter: _filter }
) => {
  const pipelines = [];

  // TODO: add filtering on string properties for the query

  if (sortBy && order)
    pipelines.push({ $sort: { [sortBy]: order == SORT_ORDER.ASC ? 1 : -1 } });

  pipelines.push({ $skip: pageSize * (pageNumber - 1) });
  pipelines.push({ $limit: parseInt(pageSize) });

  return async () => model.aggregate(pipelines);
};

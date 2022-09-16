import { SORT_ORDER } from "../enums/sort.enum.js";

export const getPaginationPipelines = ({ pageNumber, pageSize }) => {
  let pipelines = [];

  if (pageNumber !== undefined && pageSize !== undefined) {
    pipelines.push({ $skip: pageSize * (pageNumber - 1) });
    pipelines.push({ $limit: parseInt(pageSize) });
  }

  return pipelines;
};

export const getSortingPipelines = ({ sortBy, order }) => {
  let pipelines = [];

  if (sortBy && order)
    pipelines.push({ $sort: { [sortBy]: order == SORT_ORDER.ASC ? 1 : -1 } });

  return pipelines;
};

export const getFilteringPipelines = ({ key, filter }) => {
  let pipelines = [];

  if (key && filter) {
    pipelines.push({ $match: { [key]: filter } });
  }

  return pipelines;
};

export const getCountPipelines = () => [{ $count: "total" }];

export const getPaginationWithCount = (query) => [
  {
    $facet: {
      list: getPaginationPipelines(query),
      total: getCountPipelines(),
    },
  },
];

import { SORT_ORDER } from "../enums/sort.enum.js";

export class QueryModel {
  #pageNumber = 1;
  #pageSize = 10;
  #sortBy = "";
  #order = SORT_ORDER.ASC;
  #key = "";
  #filter = "";

  constructor({ pageNumber, pageSize, sortBy, order, key, filter }) {
    this.#pageNumber = pageNumber || 1;
    this.#pageSize = pageSize || 10;
    this.#sortBy = sortBy || "";
    this.#order = order || SORT_ORDER.ASC;
    this.#key = key || "";
    this.#filter = filter || "";
  }

  getParams = () => {
    return {
      pageNumber: this.#pageNumber,
      pageSize: this.#pageSize,
      sortBy: this.#sortBy,
      order: this.#order,
      key: this.#key,
      filter: this.#filter,
    };
  };
}

export const seedDb = (seeds, Model) => {
  Model.insertMany(seeds);
};

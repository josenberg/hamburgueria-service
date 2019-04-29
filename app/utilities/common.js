const { reduce, max } = require('ramda');

/**
 * Return the next id to be used in a insertion
 * @param {*} ingredients
 */
const getNextID = (ingredients) => {
  const listOfIds = ingredients.map(ingredient => ingredient.id);
  return reduce(max, 0, listOfIds) + 1;
};

module.exports = {
  getNextID,
};

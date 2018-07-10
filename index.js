/**
 * Removes all the duplicate items from the collection
 * @param {Array} items
 * @returns {Array}
 */
const removeDuplicateItems = (items) => {
  const myNewSet = new Set(items);

  const final = Array.from(myNewSet);
  return final;
};

module.exports = removeDuplicateItems;

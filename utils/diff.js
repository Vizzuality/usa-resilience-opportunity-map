import isEqual from 'lodash.isequal';

/**
 * Deep diff between two object-likes
 * @param  {Object} fromObject the original object
 * @param  {Object} toObject   the updated object
 * @return {Object}            a new object which represents the diff
 */
export function diff(fromObject, toObject) {
  const changes = {};

  Object.keys(fromObject).forEach((key) => {
    if (!Object.keys(toObject).includes(key)) {
      changes[key] = { from: fromObject[key] };
    }
  });

  Object.entries(toObject).forEach(([key, to]) => {
    if (!Object.keys(fromObject).includes(key)) {
      changes[key] = { to };
    } else {
      const from = fromObject[key];
      if (!isEqual(from, to)) {
        changes[key] = { from, to };
      }
    }
  });

  return changes;
}

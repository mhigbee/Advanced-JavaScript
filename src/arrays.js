// Complete the following functions.
// These functions only need to work with arrays.


const each = (elements, cb) => {
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i);
  }
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  // based off http://underscorejs.org/#each
};

const map = (elements, cb) => {
  const returnArray = [];
  for (let i = 0; i < elements.length; i++) {
    returnArray.push(cb(elements[i]));
  }
  return returnArray;
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
};

const reduce = (elements, cb, memo) => {
  if (typeof memo !== 'undefined') {
    elements.unshift(memo);
  }
  const sumOfElements = elements.reduce((a, b) => a + b);
  return sumOfElements;
  // Combine all elements into a single value going from left to right.
  // Elements will be passed one by one into `cb`.
  // `memo` is the starting value.  If `memo` is undefined then make `elements[0]` the initial value.
};

const find = (elements, cb) => {
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i])) {
      return elements[i];
    }
  }
  return 'undefined';
  // Look through each value in `elements` and pass each element to `cb`.
  // If `cb` returns `true` then return that element.
  // Return `undefined` if no elements pass the truth test.
};

const filter = (elements, cb) => {
  const double = [];
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i])) {
      double.push(elements[i]);
    }
  }
  return double;
  // Similar to `find` but you will return an array of all elements that passed the truth test
  // Return an empty array if no elements pass the truth test
};

const flatten = (elements) => {
  return elements.reduce((flat, toFlatten) => {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
};

/* eslint-enable no-unused-vars, max-len */

module.exports = {
  each,
  map,
  reduce,
  find,
  filter,
  flatten
};

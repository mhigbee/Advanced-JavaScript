// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

const keys = (obj) => {
  // Retrieve all the names of the object's properties.
  // Return the keys as strings in an array.
  // Based on http://underscorejs.org/#ke
  const arr = Object.keys(obj);
  return arr;
};

const values = (obj) => {
  // Return all of the values of the object's own properties.
  // Ignore functions
  // http://underscorejs.org/#values
  const arr = Object.keys(obj).map((x) => {
    return obj[x];
  }); return arr;
};

const mapObject = (obj, cb) => {
  Object.keys(obj).forEach((x) => {
    obj[x] = cb(obj[x]);
  });
  return obj;
  // Like map for arrays, but for objects. Transform the value of each property in turn.
  // http://underscorejs.org/#mapObject
};

const pairs = (obj) => {
  return Object.entries(obj);
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
};

const invert = (obj) => {
  const returnedObject = {};
  const arrayToLoop = Object.entries(obj);
  for (let i = 0; i < arrayToLoop.length; i++) {
    for (let j = 0; j < arrayToLoop[i].length - 1; j++) {
      returnedObject[arrayToLoop[i][j + 1]] = arrayToLoop[i][j];
    }
  }
  return returnedObject;
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
};

const defaults = (obj, defaultProps) => {
  const trackingArray = Object.keys(obj);
  const comparableArray = Object.keys(defaultProps);
  for (let i = 0; i < trackingArray.length; i++) {
    for (let j = 0; j < comparableArray.length; j++) {
      if (trackingArray[i] !== comparableArray[j]) {
        obj[comparableArray[j]] = defaultProps[comparableArray[j]];
      }
    }
  }
  return obj;
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
};

/* eslint-enable no-unused-vars */

module.exports = {
  keys,
  values,
  mapObject,
  pairs,
  invert,
  defaults
};

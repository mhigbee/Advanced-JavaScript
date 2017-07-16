// Complete the following functions.

const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  // Example: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
  let count = 0;
  const increments = () => {
    return ++count;
  };
  return increments;
};

const counterFactory = () => {
  let count = 0;
  const counterObj = {
    increment: () => {
      return ++count;
    },
    decrement: () => {
      return --count;
    }
  };
  return counterObj;
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};

const limitFunctionCallCount = (cb, n) => {
  let callCount = 0;
  return (...args) => {
    if (callCount === n) return null;
    callCount++;
    return cb(...args);
  };
  // let nCounter = 0;
  // if (nCounter < n) {
  //   nCounter++;
  //   const invokecb = () => {
  //     cb();
  //   };
  //   return invokecb;
  // }
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
};

const cacheFunction = (cb) => {
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
};

/* eslint-enable no-unused-vars */

module.exports = {
  counter,
  counterFactory,
  cacheFunction,
  limitFunctionCallCount
};

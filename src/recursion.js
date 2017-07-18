// Complete the following functions.

const nFibonacci = (n) => {
  if (n < 0) {
    console.log('Incorrect input');
  } else if (n === 1) {
    return 1;
  } else if (n === 2) {
    return 2;
  } else {
    return nFibonacci(n - 1) + nFibonacci(n - 2);
  }
  /*
                        f(5)
                f(4)              f(3)
          f(3)        f(2)    f(2)    f(1)
      f(2)    f(1)
  */
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  // The Fibonacci sequence is a series of numbers where a
  //   number is found by adding up the two numbers before it.
  //   Starting with 0 and 1, the sequence goes 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, and so forth.
  //   Written as a rule, the expression is xn = xn-1 + xn-2.
};

const nFactorial = (n) => {
  if (n === 1) {
    return 1;
  }
  return n * nFactorial(n - 1);
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
};

const checkMatchingLeaves = (obj, valueToCheck = null) => {
  const arrayToCheck = Object.entries(obj);
  // array
  let checkValue = valueToCheck;
  let foundBadValue = false;
  arrayToCheck.forEach((element) => {
    if (checkValue === null) {
      checkValue = element[1];
    } else if (typeof element[1] === 'object') {
      const areMatching = checkMatchingLeaves(element[1], checkValue);
      if (!areMatching) {
        foundBadValue = true;
        return;
      }
    } else if (checkValue !== element[1]) {
      foundBadValue = true;
      return;
    }
  });
  return !foundBadValue;
  // return true if every property on `obj` is the same
  // otherwise return false
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves
};

const countKeysEqual = require("../4.2. Count Keys Equal/countKeysEqual");
const countKeysLess = require("../4.3. Count Keys Less/countKeysLess");
const rearrange = require("../4.4 Rearrange/rearrange");

// COUNTING-SORT
const countingSort = (A, n = A.length, m = Math.max(...A) + 1) => {
  const countNumbers = countKeysEqual(A);
  const lessNumbers = countKeysLess(countNumbers);
  return rearrange(numbers, lessNumbers);
};

// TESTS
const numbers = [4, 1, 0, 1, 2, 4, 8, 6, 3, 9, 9, 1];
const orderedNumbers = [0, 1, 1, 1, 2, 3, 4, 4, 6, 8, 9, 9];
const tests =
  JSON.stringify(countingSort(numbers)) === JSON.stringify(orderedNumbers);
console.log("countingSort: TESTS " + (tests ? "PASSED" : "FAILED"));

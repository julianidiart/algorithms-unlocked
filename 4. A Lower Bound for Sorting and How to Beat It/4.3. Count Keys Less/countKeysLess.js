// COUNT-KEYS-LESS
const countKeysLess = (equal, m = equal.length) => {
  let less = Array(m);
  less[0] = 0;
  for (let j = 1; j < m; j++) {
    less[j] = less[j - 1] + equal[j - 1];
  }
  return less;
};

// TESTS
const countKeysEqual = require("../4.2. Count Keys Equal/countKeysEqual");
const numbers = [4, 1, 0, 1, 2, 4, 8, 6, 3, 9, 9, 1];
const countNumbers = countKeysEqual(numbers);
const lessNumbers = [0, 1, 4, 5, 6, 8, 8, 9, 9, 10];
const tests =
  JSON.stringify(countKeysLess(countNumbers)) === JSON.stringify(lessNumbers);
console.log("countKeysLess: TESTS " + (tests ? "PASSED" : "FAILED"));

module.exports = countKeysLess;

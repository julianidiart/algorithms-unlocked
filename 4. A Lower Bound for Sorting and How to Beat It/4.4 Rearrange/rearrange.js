// REARRANGE
const rearrange = (A, less, n = A.length, m = Math.max(...A) + 1) => {
  let B = Array(n),
    next = Array(m);
  for (let j = 0; j < m; j++) next[j] = less[j] + 1;
  for (let i = 0; i < n; i++) {
    const key = A[i];
    const index = next[key];
    B[index - 1] = A[i];
    next[key]++;
  }
  return B;
};

// TESTS
const countKeysEqual = require("../4.2. Count Keys Equal/countKeysEqual");
const countKeysLess = require("../4.3. Count Keys Less/countKeysLess");
const numbers = [4, 1, 0, 1, 2, 4, 8, 6, 3, 9, 9, 1];
const countNumbers = countKeysEqual(numbers);
const lessNumbers = countKeysLess(countNumbers);
const orderedNumbers = [0, 1, 1, 1, 2, 3, 4, 4, 6, 8, 9, 9];
const tests =
  JSON.stringify(rearrange(numbers, lessNumbers)) ===
  JSON.stringify(orderedNumbers);
console.log("rearrange: TESTS " + (tests ? "PASSED" : "FAILED"));

module.exports = rearrange;

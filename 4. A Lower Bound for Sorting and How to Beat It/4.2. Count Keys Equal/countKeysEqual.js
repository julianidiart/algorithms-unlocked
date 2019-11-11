// COUNT-KEYS-EQUAL
const countKeysEqual = (A, n = A.length, m = [...new Set(A)]) => {
  let equal = m.fill(0);
  for (let i = 0; i < n; i++) {
    const key = A[i];
    equal[key - 1]++;
  }
  return equal;
};

// TESTS
const numbers = [1, 2, 1, 2, 2, 2, 1, 1, 2, 1, 2];
const countNumbers = [5, 6];
const tests =
  JSON.stringify(countKeysEqual(numbers)) === JSON.stringify(countNumbers);
console.log("countKeysEqual: TESTS " + (tests ? "PASSED" : "FAILED"));

module.exports = countKeysEqual;

// COUNT-KEYS-EQUAL
const countKeysEqual = (
  A,
  n = A.length,
  m = [...Array(Math.max(...A) + 1).keys()]
) => {
  let equal = m.fill(0);
  for (let i = 0; i < n; i++) {
    const key = A[i];
    equal[key]++;
  }
  return equal;
};

// TESTS
const numbers = [4, 1, 0, 1, 2, 4, 8, 6, 3, 9, 9, 1];
const countNumbers = [5, 6];
// const tests =
//   JSON.stringify(countKeysEqual(numbers)) === JSON.stringify(countNumbers);
// console.log("countKeysEqual: TESTS " + (tests ? "PASSED" : "FAILED"));

console.log(countKeysEqual(numbers));

module.exports = countKeysEqual;

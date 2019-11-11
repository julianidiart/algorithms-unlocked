// REALLY-SIMPLE-SORT
const reallySimpleSory = (A, n = A.length) => {
  let k = 0;
  for (let i = 0; i < n; i++) A[i] === 1 && k++;
  for (let i = 0; i < k; i++) A[i] = 1;
  for (let i = k; i < n; i++) A[i] = 2;
  return A;
};

// TESTS
const numbers = [1, 2, 1, 2, 2, 2, 1, 1, 2, 1, 2];
const sortedNumbers = [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2];
const tests =
  JSON.stringify(reallySimpleSory(numbers)) === JSON.stringify(sortedNumbers);
console.log("reallySimpleSory: TESTS " + (tests ? "PASSED" : "FAILED"));

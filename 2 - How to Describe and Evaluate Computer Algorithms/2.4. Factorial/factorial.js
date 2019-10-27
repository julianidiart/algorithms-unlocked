// FACTORIAL
const factorial = n => {
  if (n === 0) return 1;
  return n * factorial(n - 1);
};

// TESTS
const tests =
  factorial(4) === 24 &&
  factorial(9) === 362880 &&
  factorial(1) === 1 &&
  factorial(0) === 1;
console.log("factorial: TESTS " + (tests ? "PASSED" : "FAILED"));

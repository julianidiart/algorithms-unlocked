// PARTITION
const partition = require("./partition");

// QUICKSORT
const quicksort = (A, p = 0, r = A.length - 1) => {
  if (p >= r) return;
  const q = partition(A, p, r);
  quicksort(A, p, q - 1);
  quicksort(A, q + 1, r);
  return A;
};

// TESTS
const authors = [
  "Octavio Paz",
  "Douglas Adams",
  "Isaac Asimov",
  "George Orwell",
  "Pablo Neruda",
  "Aldous Huxley",
  "Terry Pratchett",
  "Julio Cortázar"
];
const sortedAuthors = [
  "Aldous Huxley",
  "Douglas Adams",
  "George Orwell",
  "Isaac Asimov",
  "Julio Cortázar",
  "Octavio Paz",
  "Pablo Neruda",
  "Terry Pratchett"
];
const numbers = [9, 20, 1, 5, 7, 32, -4, 15];
const sortedNumbers = [-4, 1, 5, 7, 9, 15, 20, 32];
const tests =
  JSON.stringify(quicksort(authors)) === JSON.stringify(sortedAuthors) &&
  JSON.stringify(quicksort(numbers)) === JSON.stringify(sortedNumbers);
console.log("quicksort: TESTS " + (tests ? "PASSED" : "FAILED"));

// MERGE
const merge = require("./merge");

// MERGE-SORT
const mergeSort = (A, p = 0, r = A.length - 1) => {
  if (p >= r) return;
  const q = Math.floor((p + r) / 2);
  mergeSort(A, p, q);
  mergeSort(A, q + 1, r);
  return merge(A, p, q, r);
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
  JSON.stringify(mergeSort(authors)) === JSON.stringify(sortedAuthors) &&
  JSON.stringify(mergeSort(numbers)) === JSON.stringify(sortedNumbers);
console.log("mergeSort: TESTS " + (tests ? "PASSED" : "FAILED"));

// RECURSIVE-BINARY-SEARCH
const recursiveBinarySearch = (A, x, p = 1, r = authors.length) => {
  if (p > r) return null;
  const q = Math.floor((p + r) / 2);
  if (A[q - 1] === x) return q - 1;
  if (A[q - 1] > x) {
    return recursiveBinarySearch(A, x, p, q - 1);
  } else {
    return recursiveBinarySearch(A, x, q + 1, r);
  }
};

// TESTS
const authors = [
  "Aldous Huxley",
  "Douglas Adams",
  "George Orwell",
  "Isaac Asimov",
  "Julio Cortázar",
  "Octavio Paz",
  "Pablo Neruda",
  "Terry Pratchett"
];
const tests =
  recursiveBinarySearch(authors, "Aldous Huxley") === 0 &&
  recursiveBinarySearch(authors, "Isaac Asimov") === 3 &&
  recursiveBinarySearch(authors, "Terry Pratchett") === 7 &&
  recursiveBinarySearch(authors, "Jorge Luis Borges") === null;
console.log("recursiveBinarySearch: TESTS " + (tests ? "PASSED" : "FAILED"));

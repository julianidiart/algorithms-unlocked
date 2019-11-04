// RECURSIVE-BINARY-SEARCH
const recursiveBinarySearch = (A, r, x, p = 1) => {
  if (p > r) return null;
  const q = Math.floor((p + r) / 2);
  if (A[q - 1] === x) return q - 1;
  if (A[q - 1] > x) {
    return recursiveBinarySearch(A, q - 1, x, p);
  } else {
    return recursiveBinarySearch(A, r, x, q + 1);
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
  recursiveBinarySearch(authors, authors.length, "Aldous Huxley") === 0 &&
  recursiveBinarySearch(authors, authors.length, "Isaac Asimov") === 3 &&
  recursiveBinarySearch(authors, authors.length, "Terry Pratchett") === 7 &&
  recursiveBinarySearch(authors, authors.length, "Jorge Luis Borges") === null;
console.log("recursiveBinarySearch: TESTS " + (tests ? "PASSED" : "FAILED"));

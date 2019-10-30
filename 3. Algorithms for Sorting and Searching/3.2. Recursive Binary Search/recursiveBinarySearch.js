// RECURSIVE-BINARY-SEARCH
const recursiveBinarySearch = (A, r, x, p = 0) => {
  if (p > r) return null;
  const q = Math.floor((p + r) / 2);
  if (A[q] === x) return q;
  if (A[q] > x) {
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
  recursiveBinarySearch(authors, authors.length - 1, "Aldous Huxley") === 0 &&
  recursiveBinarySearch(authors, authors.length - 1, "Isaac Asimov") === 3 &&
  recursiveBinarySearch(authors, authors.length - 1, "Terry Pratchett") === 7 &&
  recursiveBinarySearch(authors, authors.length - 1, "Jorge Luis Borges") ===
    null;
console.log("recursiveBinarySearch: TESTS " + (tests ? "PASSED" : "FAILED"));

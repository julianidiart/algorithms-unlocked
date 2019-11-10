// BINARY-SEARCH
const binarySearch = (A, x, n = authors.length) => {
  let p = 0;
  let r = n - 1;
  while (p <= r) {
    const q = Math.floor((p + r) / 2);
    if (A[q] === x) return q;
    if (A[q] > x) {
      r = q - 1;
    } else {
      p = q + 1;
    }
  }
  return null;
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
  binarySearch(authors, "Aldous Huxley") === 0 &&
  binarySearch(authors, "Isaac Asimov") === 3 &&
  binarySearch(authors, "Terry Pratchett") === 7 &&
  binarySearch(authors, "Jorge Luis Borges") === null;
console.log("binarySearch: TESTS " + (tests ? "PASSED" : "FAILED"));

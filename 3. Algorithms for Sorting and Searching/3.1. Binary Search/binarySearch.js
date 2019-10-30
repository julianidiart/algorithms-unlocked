// BINARY-SEARCH
const binarySearch = (A, n, x) => {
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
  binarySearch(authors, authors.length, "Aldous Huxley") === 0 &&
  binarySearch(authors, authors.length, "Isaac Asimov") === 3 &&
  binarySearch(authors, authors.length, "Terry Pratchett") === 7 &&
  binarySearch(authors, authors.length, "Jorge Luis Borges") === null;
console.log("binarySearch: TESTS " + (tests ? "PASSED" : "FAILED"));

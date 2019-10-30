// RECURSIVE-LINEAR-SEARCH
const recursiveLinearSearch = (A, n, x, i = 0) => {
  if (i > n) return null;
  if (A[i] === x) return i;
  return recursiveLinearSearch(A, n, x, ++i);
};

// TESTS
const authors = [
  "Isaac Asimov",
  "Aldous Huxley",
  "George Orwell",
  "Douglas Adams",
  "Terry Pratchett",
  "Julio Cortázar",
  "Pablo Neruda",
  "Octavio Paz"
];
const tests =
  recursiveLinearSearch(authors, authors.length, "Isaac Asimov") === 0 &&
  recursiveLinearSearch(authors, authors.length, "Terry Pratchett") === 4 &&
  recursiveLinearSearch(authors, authors.length, "Jorge Luis Borges") === null;
console.log("recursiveLinearSearch: TESTS " + (tests ? "PASSED" : "FAILED"));

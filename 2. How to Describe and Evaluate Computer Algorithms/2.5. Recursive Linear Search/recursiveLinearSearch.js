// RECURSIVE-LINEAR-SEARCH
const recursiveLinearSearch = (A, x, i = 0, n = A.length) => {
  if (i > n) return null;
  if (A[i] === x) return i;
  return recursiveLinearSearch(A, x, ++i, n);
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
  recursiveLinearSearch(authors, "Isaac Asimov") === 0 &&
  recursiveLinearSearch(authors, "Terry Pratchett") === 4 &&
  recursiveLinearSearch(authors, "Jorge Luis Borges") === null;
console.log("recursiveLinearSearch: TESTS " + (tests ? "PASSED" : "FAILED"));

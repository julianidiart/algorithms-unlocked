// BETTER-LINEAR-SEARCH
const betterLinearSearch = (A, n, x) => {
  for (let i = 0; i < n; i++) {
    if (A[i] === x) return i;
  }
  return null;
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
const passed =
  betterLinearSearch(authors, authors.length, "Isaac Asimov") === 0 &&
  betterLinearSearch(authors, authors.length, "Terry Pratchett") === 4 &&
  betterLinearSearch(authors, authors.length, "Jorge Luis Borges") === null;
console.log("betterLinearSearch: TESTS " + (passed ? "PASSED" : "FAILED"));

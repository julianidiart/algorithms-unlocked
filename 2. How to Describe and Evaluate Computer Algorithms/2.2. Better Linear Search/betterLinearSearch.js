// BETTER-LINEAR-SEARCH
const betterLinearSearch = (A, x, n = authors.length) => {
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
  betterLinearSearch(authors, "Isaac Asimov") === 0 &&
  betterLinearSearch(authors, "Terry Pratchett") === 4 &&
  betterLinearSearch(authors, "Octavio Paz") === 7 &&
  betterLinearSearch(authors, "Jorge Luis Borges") === null;
console.log("betterLinearSearch: TESTS " + (passed ? "PASSED" : "FAILED"));

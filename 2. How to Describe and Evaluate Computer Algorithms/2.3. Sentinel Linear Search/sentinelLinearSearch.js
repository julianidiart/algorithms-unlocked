// SENTINEL-LINEAR-SEARCH
const sentinelLinearSearch = (A, x, n = authors.length) => {
  const last = A[n - 1];
  A[n - 1] = x;
  let i = 0;
  while (A[i] !== x) i++;
  A[n - 1] = last;
  if (i < n - 1 || A[n - 1] === x) return i;
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
  sentinelLinearSearch(authors, "Isaac Asimov") === 0 &&
  sentinelLinearSearch(authors, "Terry Pratchett") === 4 &&
  sentinelLinearSearch(authors, "Octavio Paz") === 7 &&
  sentinelLinearSearch(authors, "Jorge Luis Borges") === null;
console.log("sentinelLinearSearch: TESTS " + (passed ? "PASSED" : "FAILED"));

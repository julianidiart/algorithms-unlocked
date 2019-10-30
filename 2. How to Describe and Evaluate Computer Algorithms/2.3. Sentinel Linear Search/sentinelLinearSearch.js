// SENTINEL-LINEAR-SEARCH
const sentinelLinearSearch = (A, n, x) => {
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
  sentinelLinearSearch(authors, authors.length, "Isaac Asimov") === 0 &&
  sentinelLinearSearch(authors, authors.length, "Terry Pratchett") === 4 &&
  sentinelLinearSearch(authors, authors.length, "Jorge Luis Borges") === null;
console.log("sentinelLinearSearch: TESTS " + (passed ? "PASSED" : "FAILED"));

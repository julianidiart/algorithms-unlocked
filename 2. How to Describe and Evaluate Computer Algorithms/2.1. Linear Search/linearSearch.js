// LINEAR-SEARCH
const linearSearch = (A, x, n = authors.length) => {
  let answer = null;
  for (let i = 0; i < n; i++) {
    if (A[i] === x) answer = i;
  }
  return answer;
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
  linearSearch(authors, "Isaac Asimov") === 0 &&
  linearSearch(authors, "Terry Pratchett") === 4 &&
  linearSearch(authors, "Octavio Paz") === 7 &&
  linearSearch(authors, "Jorge Luis Borges") === null;
console.log("linearSearch: TESTS " + (tests ? "PASSED" : "FAILED"));

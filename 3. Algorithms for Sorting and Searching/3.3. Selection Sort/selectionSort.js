// SELECTION-SORT
const selectionSort = (A, n) => {
  for (let i = 0; i < n - 1; i++) {
    let smallest = i;
    for (let j = i + 1; j < n; j++) {
      A[j] < A[smallest] && (smallest = j);
    }
    const aux = A[i];
    A[i] = A[smallest];
    A[smallest] = aux;
  }
  return A;
};

// TESTS
const authors = [
  "Octavio Paz",
  "Douglas Adams",
  "Isaac Asimov",
  "George Orwell",
  "Pablo Neruda",
  "Aldous Huxley",
  "Julio Cortázar"
];
const sortedAuthors = [
  "Aldous Huxley",
  "Douglas Adams",
  "George Orwell",
  "Isaac Asimov",
  "Julio Cortázar",
  "Octavio Paz",
  "Pablo Neruda"
];
const numbers = [9, 20, 1, 5, 7, 32, -4, 15];
const sortedNumbers = [-4, 1, 5, 7, 9, 15, 20, 32];
const tests =
  JSON.stringify(selectionSort(authors, authors.length)) ===
    JSON.stringify(sortedAuthors) &&
  JSON.stringify(selectionSort(numbers, numbers.length)) ===
    JSON.stringify(sortedNumbers);
console.log("selectionSort: TESTS " + (tests ? "PASSED" : "FAILED"));

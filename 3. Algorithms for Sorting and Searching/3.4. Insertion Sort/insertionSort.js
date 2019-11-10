// INSERTION-SORT
const insertionSort = (A, n = authors.length) => {
  for (let i = 1; i < n; i++) {
    let key = A[i],
      j = i - 1;
    while (j >= 0 && A[j] > key) {
      A[j + 1] = A[j];
      j--;
    }
    A[j + 1] = key;
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
  "Terry Pratchett",
  "Julio Cortázar"
];
const sortedAuthors = [
  "Aldous Huxley",
  "Douglas Adams",
  "George Orwell",
  "Isaac Asimov",
  "Julio Cortázar",
  "Octavio Paz",
  "Pablo Neruda",
  "Terry Pratchett"
];
const numbers = [9, 20, 1, 5, 7, 32, -4, 15];
const sortedNumbers = [-4, 1, 5, 7, 9, 15, 20, 32];
const tests =
  JSON.stringify(insertionSort(authors)) === JSON.stringify(sortedAuthors) &&
  JSON.stringify(insertionSort(numbers)) === JSON.stringify(sortedNumbers);
console.log("insertionSort: TESTS " + (tests ? "PASSED" : "FAILED"));

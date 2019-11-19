// INSERTION-SORT
const insertionSort = A => {
  const n = A.length;
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

export default insertionSort;

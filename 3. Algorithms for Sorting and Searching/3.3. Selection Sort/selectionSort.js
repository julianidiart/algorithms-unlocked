// SELECTION-SORT
const selectionSort = A => {
  const n = A.length;
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

export default selectionSort;

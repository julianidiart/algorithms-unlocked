// MERGE
import merge from "./merge";

// MERGE-SORT
const mergeSort = (A, p = 0, r = A.length - 1) => {
  if (p >= r) return;
  const q = Math.floor((p + r) / 2);
  mergeSort(A, p, q);
  mergeSort(A, q + 1, r);
  return merge(A, p, q, r);
};

export default mergeSort;

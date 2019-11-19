// RECURSIVE-BINARY-SEARCH
const recursiveBinarySearch = (A, x, p = 1, r = A.length) => {
  if (p > r) return null;
  const q = Math.floor((p + r) / 2);
  if (A[q - 1] === x) return q - 1;
  if (A[q - 1] > x) {
    return recursiveBinarySearch(A, x, p, q - 1);
  } else {
    return recursiveBinarySearch(A, x, q + 1, r);
  }
};

export default recursiveBinarySearch;

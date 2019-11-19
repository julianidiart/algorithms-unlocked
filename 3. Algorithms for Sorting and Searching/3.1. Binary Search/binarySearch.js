// BINARY-SEARCH
const binarySearch = (A, x) => {
  const n = A.length;
  let p = 0;
  let r = n - 1;
  while (p <= r) {
    const q = Math.floor((p + r) / 2);
    if (A[q] === x) return q;
    if (A[q] > x) {
      r = q - 1;
    } else {
      p = q + 1;
    }
  }
  return null;
};

export default binarySearch;

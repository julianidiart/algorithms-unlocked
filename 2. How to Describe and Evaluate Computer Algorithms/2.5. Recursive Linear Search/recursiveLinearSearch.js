// RECURSIVE-LINEAR-SEARCH
const recursiveLinearSearch = (A, x, i = 0) => {
  const n = A.length;
  if (i > n) return null;
  if (A[i] === x) return i;
  return recursiveLinearSearch(A, x, ++i, n);
};

export default recursiveLinearSearch;

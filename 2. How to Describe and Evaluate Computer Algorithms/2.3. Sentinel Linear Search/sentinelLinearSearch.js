// SENTINEL-LINEAR-SEARCH
const sentinelLinearSearch = (A, x, n = A.length) => {
  const last = A[n - 1];
  A[n - 1] = x;
  let i = 0;
  while (A[i] !== x) i++;
  A[n - 1] = last;
  if (i < n - 1 || A[n - 1] === x) return i;
  return null;
};

export default sentinelLinearSearch;

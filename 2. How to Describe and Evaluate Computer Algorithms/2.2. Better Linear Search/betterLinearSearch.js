// BETTER-LINEAR-SEARCH
const betterLinearSearch = (A, x) => {
  const n = A.length;
  for (let i = 0; i < n; i++) {
    if (A[i] === x) return i;
  }
  return null;
};

export default betterLinearSearch;

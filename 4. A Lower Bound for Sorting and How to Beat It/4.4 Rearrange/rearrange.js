// REARRANGE
const rearrange = (A, less) => {
  const n = A.length,
    m = Math.max(...A) + 1;
  let B = Array(n),
    next = Array(m);
  for (let j = 0; j < m; j++) next[j] = less[j] + 1;
  for (let i = 0; i < n; i++) {
    const key = A[i];
    const index = next[key];
    B[index - 1] = A[i];
    next[key]++;
  }
  return B;
};

export default rearrange;

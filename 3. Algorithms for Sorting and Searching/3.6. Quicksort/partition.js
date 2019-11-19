// PARTITION
const partition = (A, p, r) => {
  let q = p;
  for (let u = p; u <= r - 1; u++) {
    if (A[u] <= A[r]) {
      const aux = A[q];
      A[q] = A[u];
      A[u] = aux;
      q++;
    }
  }
  const aux = A[q];
  A[q] = A[r];
  A[r] = aux;
  return q;
};

export default partition;

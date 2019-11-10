// MERGE
const merge = (A, p, q, r) => {
  const MAX_VALUE =
    typeof A[0] === "string" ? String.fromCharCode(255) : Number.MAX_VALUE;
  const B = A.slice(p, q + 1).concat(MAX_VALUE);
  const C = A.slice(q + 1, r + 1).concat(MAX_VALUE);
  let i = 0,
    j = 0;
  for (let k = p; k <= r; k++) {
    if (B[i] <= C[j]) {
      A[k] = B[i];
      i++;
    } else {
      A[k] = C[j];
      j++;
    }
  }
  return A;
};

module.exports = merge;

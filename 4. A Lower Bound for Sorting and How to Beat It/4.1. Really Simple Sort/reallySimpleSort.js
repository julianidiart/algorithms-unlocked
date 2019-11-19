// REALLY-SIMPLE-SORT
const reallySimpleSort = A => {
  const n = A.length;
  let k = 0;
  for (let i = 0; i < n; i++) A[i] === 1 && k++;
  for (let i = 0; i < k; i++) A[i] = 1;
  for (let i = k; i < n; i++) A[i] = 2;
  return A;
};

export default reallySimpleSort;

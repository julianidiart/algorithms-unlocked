// COUNT-KEYS-EQUAL
const countKeysEqual = A => {
  const n = A.length,
    m = Math.max(...A) + 1;
  let equal = Array(m).fill(0);
  for (let i = 0; i < n; i++) {
    const key = A[i];
    equal[key]++;
  }
  return equal;
};

export default countKeysEqual;

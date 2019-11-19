// COUNT-KEYS-LESS
const countKeysLess = (equal, m = equal.length) => {
  let less = Array(m);
  less[0] = 0;
  for (let j = 1; j < m; j++) {
    less[j] = less[j - 1] + equal[j - 1];
  }
  return less;
};

export default countKeysLess;

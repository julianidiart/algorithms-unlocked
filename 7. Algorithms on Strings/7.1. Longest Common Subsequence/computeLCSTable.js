const computeLCSTable = (X, Y) => {
  const m = X.length + 1,
    n = Y.length + 1;
  let l = [];
  for (let i = 0; i < m; i++) {
    l[i] = [];
    l[i][0] = 0;
  }
  for (let j = 0; j < n; j++) {
    l[0][j] = 0;
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      l[i][j] =
        X[i - 1] === Y[j - 1]
          ? l[i - 1][j - 1] + 1
          : Math.max(l[i][j - 1], l[i - 1][j]);
    }
  }
  return l;
};

export default computeLCSTable;

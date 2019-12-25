const assembleLCS = (X, Y, l, i, j) => {
  if (l[i][j] === 0) return "";
  if (X[i - 1] === Y[j - 1])
    return assembleLCS(X, Y, l, i - 1, j - 1) + X[i - 1];
  else if (l[i][j - 1] > l[i - 1][j]) return assembleLCS(X, Y, l, i, j - 1);
  else if (l[i][j - 1] <= l[i - 1][j]) return assembleLCS(X, Y, l, i - 1, j);
};

export default assembleLCS;

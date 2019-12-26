const computeTransformTables = (X, Y, cC, cR, cD, cI) => {
  const m = X.length + 1,
    n = Y.length + 1;
  let cost = [],
    op = [];
  cost[0] = [];
  cost[0][0] = 0;
  op[0] = [];
  op[0][0] = "";
  for (let i = 1; i < m; i++) {
    if (!cost[i]) cost[i] = [];
    cost[i][0] = i * cD;
    if (!op[i]) op[i] = [];
    op[i][0] = `delete ${X[i - 1]}`;
  }
  for (let j = 1; j < n; j++) {
    cost[0][j] = j * cI;
    op[0][j] = `insert ${Y[j - 1]}`;
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (X[i - 1] === Y[j - 1]) {
        cost[i][j] = cost[i - 1][j - 1] + cC;
        op[i][j] = `copy ${X[i - 1]}`;
      } else {
        cost[i][j] = cost[i - 1][j - 1] + cR;
        op[i][j] = `replace ${X[i - 1]} by ${Y[j - 1]}`;
      }
      if (cost[i - 1][j] + cD < cost[i][j]) {
        cost[i][j] = cost[i - 1][j] + cD;
        op[i][j] = `delete ${X[i - 1]}`;
      }
      if (cost[i][j - 1] + cI < cost[i][j]) {
        cost[i][j] = cost[i][j - 1] + cI;
        op[i][j] = `insert ${Y[j - 1]}`;
      }
    }
  }
  return { cost, op };
};

export default computeTransformTables;

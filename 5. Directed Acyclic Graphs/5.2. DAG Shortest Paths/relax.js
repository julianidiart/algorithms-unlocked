// RELAX
const relax = (u, v, shortest, pred, weight) => {
  if (shortest[u] + weight[u][v] < shortest[v]) {
    shortest[v] = shortest[u] + weight[u][v];
    pred[v] = u;
  }
};

export default relax;

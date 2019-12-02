import bellmanFord from "../6.3. Bellman-Ford/bellmanFord";

// FIND-NEGATIVE-WEIGHT-CYCLE
const findNegativeWeightCycle = G => {
  const { shortest, pred } = bellmanFord(G, Object.keys(G.V)[0]);
  const weight = G.E;
  let negativeWeightCycleEdge = {};
  outerloop: for (let u in weight) {
    for (let v in weight[u]) {
      if (shortest[u] + weight[u][v] < shortest[v]) {
        negativeWeightCycleEdge[u] = v;
        break outerloop;
      }
    }
  }
  if (Object.keys(negativeWeightCycleEdge).length === 0) return [];
  const n = Object.keys(G.V).length;
  let visited = {};
  for (let i = 0; i < n; i++) {
    const vertex = Object.keys(G.V)[i];
    visited[vertex] = false;
  }
  let x = negativeWeightCycleEdge[Object.keys(negativeWeightCycleEdge)[0]];
  while (!visited[x]) {
    visited[x] = true;
    x = pred[x];
  }
  let v = pred[x],
    cycle = [x];
  while (v !== x) {
    cycle.unshift(v);
    v = pred[v];
  }
  return cycle;
};

export default findNegativeWeightCycle;

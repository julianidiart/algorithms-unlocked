import relax from "../../5. Directed Acyclic Graphs/5.2. DAG Shortest Paths/relax";

// BELLMAN-FORD
const bellmanFord = (G, s) => {
  const n = Object.keys(G.V).length;
  let shortest = {},
    pred = {};
  for (let i = 0; i < n; i++) {
    const vertex = Object.keys(G.V)[i];
    shortest[vertex] = vertex === s ? 0 : Number.POSITIVE_INFINITY;
    pred[vertex] = null;
  }
  for (let i = 0; i < n - 1; i++) {
    for (let u in G.E) {
      for (let v in G.E[u]) {
        relax(u, v, shortest, pred, G.E);
      }
    }
  }
  return { shortest, pred };
};

export default bellmanFord;

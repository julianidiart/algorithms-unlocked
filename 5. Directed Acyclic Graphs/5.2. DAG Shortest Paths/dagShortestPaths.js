import topologicalSort from "../5.1. Topological Sort/topologicalSort";
import relax from "./relax";

// DAG-SHORTEST-PATHS
const dagShortestPaths = (G, s) => {
  const l = topologicalSort(G.V),
    n = Object.keys(G.V).length;
  let shortest = {},
    pred = {};
  for (let i = 0; i < n; i++) {
    const vertex = Object.keys(G.V)[i];
    shortest[vertex] = vertex === s ? 0 : Number.POSITIVE_INFINITY;
    pred[vertex] = null;
  }
  for (const u of l) {
    for (const v of G.V[u]) {
      relax(u, v, shortest, pred, G.E);
    }
  }
  return { shortest, pred };
};

export default dagShortestPaths;

import topologicalSort from "../5.1. Topological Sort/topologicalSort";
import relax from "./relax";

// DAG-SHORTEST-PATHS
const dagShortestPaths = (G, s) => {
  const l = topologicalSort(G.V);
  let shortest = {},
    pred = {};
  for (let i = 1; i <= Object.keys(G.V).length; i++)
    shortest[i] = i === s ? 0 : Number.POSITIVE_INFINITY;
  for (let i = 1; i <= Object.keys(G.V).length; i++) pred[i] = null;
  for (const u of l) {
    for (const v of G.V[u]) {
      relax(u, v, shortest, pred, G.E);
    }
  }
  return { shortest, pred };
};

export default dagShortestPaths;

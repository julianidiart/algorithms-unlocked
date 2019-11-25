import relax from "../../5. Directed Acyclic Graphs/5.2. DAG Shortest Paths/relax";

// DIJKSTRA
const dijkstra = (G, s) => {
  const n = Object.keys(G.V).length;
  let shortest = {},
    pred = {},
    Q = [];
  for (let i = 0; i < n; i++) {
    const vertex = Object.keys(G.V)[i];
    shortest[vertex] = vertex === s ? 0 : Number.POSITIVE_INFINITY;
    pred[vertex] = null;
    Q.push(vertex);
  }
  while (typeof Q !== undefined && Q.length > 0) {
    let u = Q[0];
    for (let i = 0; i < Q.length; i++) {
      u = shortest[Q[i]] < shortest[u] ? Q[i] : u;
    }
    Q = Q.filter(v => v !== u);
    for (let i = 0; i < Object.keys(G.E[u]).length; i++) {
      const v = Object.keys(G.E[u])[i];
      relax(u, v, shortest, pred, G.E);
    }
  }
  return { shortest, pred };
};

export default dijkstra;

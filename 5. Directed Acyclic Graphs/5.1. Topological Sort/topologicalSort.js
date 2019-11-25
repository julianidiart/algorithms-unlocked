// TOPOLOGICAL-SORT
const topologicalSort = G => {
  const vertexKeys = Object.keys(G);
  let inDegree = {};
  for (let i = 0; i < vertexKeys.length; i++) {
    inDegree[vertexKeys[i]] = 0;
  }
  for (const u in vertexKeys) {
    for (const v of G[vertexKeys[u]]) {
      inDegree[v]++;
    }
  }
  let next = [],
    linearOrder = [];
  for (const u in inDegree) {
    if (inDegree[u] === 0) next.push(u);
  }
  while (next.length > 0) {
    const u = next.pop();
    linearOrder.push("" + u);
    for (const v of G[u]) {
      inDegree[v]--;
      if (inDegree[v] === 0) next.push(v);
    }
  }
  return linearOrder;
};

export default topologicalSort;

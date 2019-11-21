// TOPOLOGICAL-SORT
const topologicalSort = G => {
  let inDegree = new Array(Object.keys(G).length).fill(0);
  for (const u in G) {
    for (const v of G[u]) {
      inDegree[v - 1]++;
    }
  }
  let next = [],
    linearOrder = [];
  for (const u in inDegree) {
    if (inDegree[u] === 0) next.push(+u + 1);
  }
  while (next.length > 0) {
    const u = next.pop();
    linearOrder.push(u);
    for (const v of G[u]) {
      inDegree[v - 1]--;
      if (inDegree[v - 1] === 0) next.push(v);
    }
  }
  return linearOrder;
};

export default topologicalSort;

// FLOYD-WARSHALL
const floydWarshall = G => {
  const n = Object.keys(G).length;
  let shortest = {},
    pred = {};
  shortest[0] = G;
  pred[0] = {};
  for (let i = 0; i < n; i++) {
    const u = Object.keys(G)[i];
    for (let j = 0; j < n; j++) {
      const v = Object.keys(G)[j];
      const weight =
        u === v || shortest[0][u][v] === Number.POSITIVE_INFINITY ? null : u;
      pred[0][u] = {
        ...pred[0][u],
        [v]: weight
      };
    }
  }
  for (let x = 1; x <= n; x++) {
    const xKey = Object.keys(G)[x - 1];
    for (let i = 0; i < n; i++) {
      const u = Object.keys(G)[i];
      if (!shortest[x]) shortest[x] = { [u]: {} };
      if (!pred[x]) pred[x] = { [u]: {} };
      for (let j = 0; j < n; j++) {
        const v = Object.keys(G)[j];
        if (
          shortest[x - 1][u][v] >
          shortest[x - 1][u][xKey] + shortest[x - 1][xKey][v]
        ) {
          shortest[x][u] = {
            ...shortest[x][u],
            [v]: shortest[x - 1][u][xKey] + shortest[x - 1][xKey][v]
          };
          pred[x][u] = { ...pred[x][u], [v]: pred[x - 1][xKey][v] };
        } else {
          shortest[x][u] = { ...shortest[x][u], [v]: shortest[x - 1][u][v] };
          pred[x][u] = { ...pred[x][u], [v]: pred[x - 1][u][v] };
        }
      }
    }
  }
  return { shortest, pred };
};

export default floydWarshall;

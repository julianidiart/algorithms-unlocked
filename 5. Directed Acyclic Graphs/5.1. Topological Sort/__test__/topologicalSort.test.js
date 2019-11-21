import topologicalSort from "../topologicalSort";

describe("topologicalSort", () => {
  it("should sort a directed acyclic graph topologically", () => {
    const dagAdjacencyList = {
      1: [3],
      2: [4],
      3: [4, 5],
      4: [6],
      5: [6],
      6: [7, 11],
      7: [8],
      8: [13],
      9: [10],
      10: [11],
      11: [12],
      12: [13],
      13: [14],
      14: []
    };

    const dagTopologicallySorted = [
      9,
      10,
      2,
      1,
      3,
      5,
      4,
      6,
      11,
      12,
      7,
      8,
      13,
      14
    ];

    expect(topologicalSort(dagAdjacencyList)).toEqual(dagTopologicallySorted);
  });
});

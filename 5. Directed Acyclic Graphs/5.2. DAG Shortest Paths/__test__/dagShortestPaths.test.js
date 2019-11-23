import dagShortestPaths from "../dagShortestPaths";

describe("dagShortestPaths", () => {
  it("should find shortest paths from vertex s to v and precending vertex v", () => {
    const G = {
      V: {
        1: [2, 3],
        2: [3, 4],
        3: [4, 5, 6],
        4: [5, 6],
        5: [6],
        6: []
      },
      E: {
        1: {
          2: 5,
          3: 3
        },
        2: {
          3: 2,
          4: 6
        },
        3: {
          4: 7,
          5: 4,
          6: 2
        },
        4: {
          5: -1,
          6: 1
        },
        5: {
          6: -2
        }
      }
    };

    const shortestPaths = {
      shortest: {
        1: Number.POSITIVE_INFINITY,
        2: 0,
        3: 2,
        4: 6,
        5: 5,
        6: 3
      },
      pred: {
        1: null,
        2: null,
        3: 2,
        4: 2,
        5: 4,
        6: 5
      }
    };

    expect(dagShortestPaths(G, 2)).toEqual(shortestPaths);
  });
});

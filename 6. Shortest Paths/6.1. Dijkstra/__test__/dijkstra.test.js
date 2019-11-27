import dijkstra from "../dijkstra";

describe("dijkstra", () => {
  it("should find shortest paths from vertex s to v and precending vertex v", () => {
    const G = {
      V: {
        s: ["t", "y"],
        t: ["x", "y"],
        x: ["z"],
        y: ["t", "x", "z"],
        z: ["s", "x"]
      },
      E: {
        s: {
          t: 6,
          y: 4
        },
        t: {
          x: 3,
          y: 2
        },
        x: {
          z: 4
        },
        y: {
          t: 1,
          x: 9,
          z: 3
        },
        z: {
          s: 7,
          x: 5
        }
      }
    };

    const dijkstraShortestPaths = {
      shortest: {
        s: 0,
        t: 5,
        x: 8,
        y: 4,
        z: 7
      },
      pred: {
        s: null,
        t: "y",
        x: "t",
        y: "s",
        z: "y"
      }
    };

    expect(dijkstra(G, "s")).toEqual(dijkstraShortestPaths);
  });
});

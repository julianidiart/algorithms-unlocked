import dijkstra from "../dijkstra";

describe("dijkstra", () => {
  it("should find shortest paths from vertex s to v and precending vertex v", () => {
    const G = {
      V: {
        s: ["y", "t"],
        t: ["y", "x"],
        x: ["z"],
        y: ["z", "x", "t"],
        z: ["x", "s"]
      },
      E: {
        s: {
          y: 4,
          t: 6
        },
        t: {
          y: 2,
          x: 3
        },
        x: {
          z: 4
        },
        y: {
          z: 3,
          x: 9,
          t: 1
        },
        z: {
          x: 5,
          s: 7
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

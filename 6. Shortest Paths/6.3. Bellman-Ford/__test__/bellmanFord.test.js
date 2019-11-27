import bellmanFord from "../bellmanFord";

describe("bellmanFord", () => {
  it("should find shortest paths from vertex s to v and precending vertex v", () => {
    const G = {
      V: {
        s: ["t", "y"],
        t: ["x", "y", "z"],
        x: ["t"],
        y: ["x", "z"],
        z: ["s", "x"]
      },
      E: {
        s: {
          t: 6,
          y: 7
        },
        t: {
          x: 5,
          y: 8,
          z: -4
        },
        x: {
          t: -2
        },
        y: {
          x: -3,
          z: 9
        },
        z: {
          s: 2,
          x: 7
        }
      }
    };

    const bellmanFordShortestPaths = {
      shortest: {
        s: 0,
        t: 2,
        x: 4,
        y: 7,
        z: -2
      },
      pred: {
        s: null,
        t: "x",
        x: "y",
        y: "s",
        z: "t"
      }
    };

    expect(bellmanFord(G, "s")).toEqual(bellmanFordShortestPaths);
  });
});

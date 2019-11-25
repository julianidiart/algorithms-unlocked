import dagShortestPaths from "../dagShortestPaths";

describe("dagShortestPaths", () => {
  it("should find shortest paths from vertex s to v and precending vertex v", () => {
    const G = {
      V: {
        r: ["s", "t"],
        s: ["t", "x"],
        t: ["x", "y", "z"],
        x: ["y", "z"],
        y: ["z"],
        z: []
      },
      E: {
        r: {
          s: 5,
          t: 3
        },
        s: {
          t: 2,
          x: 6
        },
        t: {
          x: 7,
          y: 4,
          z: 2
        },
        x: {
          y: -1,
          z: 1
        },
        y: {
          z: -2
        }
      }
    };

    const shortestPaths = {
      shortest: {
        r: Number.POSITIVE_INFINITY,
        s: 0,
        t: 2,
        x: 6,
        y: 5,
        z: 3
      },
      pred: {
        r: null,
        s: null,
        t: "s",
        x: "s",
        y: "x",
        z: "y"
      }
    };

    expect(dagShortestPaths(G, "s")).toEqual(shortestPaths);
  });
});

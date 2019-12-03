import floydWarshall from "../floydWarshall";

describe("floydWarshall", () => {
  it("should find shortest paths from vertex s to v and precending vertex v", () => {
    const G = {
      1: {
        1: 0,
        2: 3,
        3: 8,
        4: Number.POSITIVE_INFINITY
      },
      2: {
        1: Number.POSITIVE_INFINITY,
        2: 0,
        3: Number.POSITIVE_INFINITY,
        4: 1
      },
      3: {
        1: Number.POSITIVE_INFINITY,
        2: 4,
        3: 0,
        4: Number.POSITIVE_INFINITY
      },
      4: {
        1: 2,
        2: Number.POSITIVE_INFINITY,
        3: -5,
        4: 0
      }
    };

    const shortestPathLastMatrix = {
      "1": { "1": 0, "2": 3, "3": -1, "4": 4 },
      "2": { "1": 3, "2": 0, "3": -4, "4": 1 },
      "3": { "1": 7, "2": 4, "3": 0, "4": 5 },
      "4": { "1": 2, "2": -1, "3": -5, "4": 0 }
    };

    const predLastMatrix = {
      "1": { "1": null, "2": "1", "3": "4", "4": "2" },
      "2": { "1": "4", "2": null, "3": "4", "4": "2" },
      "3": { "1": "4", "2": "3", "3": null, "4": "2" },
      "4": { "1": "4", "2": "3", "3": "4", "4": null }
    };

    const { shortest, pred } = floydWarshall(G);

    expect(shortest[4]).toEqual(shortestPathLastMatrix);
    expect(pred[4]).toEqual(predLastMatrix);
  });
});

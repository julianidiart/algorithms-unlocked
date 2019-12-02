import findNegativeWeightCycle from "../findNegativeWeightCycle";

describe("findNegativeWeightCycle", () => {
  it("should find a list of vertices in a negative-weight cycle", () => {
    const G = {
      V: {
        0: [1, 2],
        1: [3],
        2: [1],
        3: [2]
      },
      E: {
        0: {
          1: 5,
          2: 4
        },
        1: {
          3: 3
        },
        2: {
          1: -6
        },
        3: {
          2: 2
        }
      }
    };

    const negativeCycle = ["2", "1", "3"];

    expect(findNegativeWeightCycle(G)).toEqual(negativeCycle);
  });

  it("should return an empty array (no negative-weight cycle founded)", () => {
    const G = {
      V: {
        0: [1, 2],
        1: [3],
        2: [1],
        3: [2]
      },
      E: {
        0: {
          1: 5,
          2: 4
        },
        1: {
          3: 3
        },
        2: {
          1: -4
        },
        3: {
          2: 2
        }
      }
    };

    const negativeCycle = [];

    expect(findNegativeWeightCycle(G)).toEqual(negativeCycle);
  });
});

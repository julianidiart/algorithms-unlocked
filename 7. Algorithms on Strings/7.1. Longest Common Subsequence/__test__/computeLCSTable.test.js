import computeLCSTable from "../computeLCSTable";

describe("computeLCSTable", () => {
  it("should return the two-dimensional array with the LCS table", () => {
    const X = "CATCGA",
      Y = "GTACCGTCA",
      LCSTable = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 2],
        [0, 0, 1, 1, 1, 1, 1, 2, 2, 2],
        [0, 0, 1, 1, 2, 2, 2, 2, 3, 3],
        [0, 1, 1, 1, 2, 2, 3, 3, 3, 3],
        [0, 1, 1, 2, 2, 2, 3, 3, 3, 4]
      ];

    expect(computeLCSTable(X, Y)).toEqual(LCSTable);
  });
});

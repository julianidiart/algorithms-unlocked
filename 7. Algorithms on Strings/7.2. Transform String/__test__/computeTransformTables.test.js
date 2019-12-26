import computeTransformTables from "../computeTransformTables";

describe("computeTransformTables", () => {
  it("should return the minimum cost to transform X and Y table and the operations table", () => {
    const X = "ACAAGC",
      Y = "CCGT",
      costCopy = -1,
      costReplace = 1,
      costDelete = 2,
      costInsert = 2,
      transformTable = {
        cost: [
          [0, 2, 4, 6, 8],
          [2, 1, 3, 5, 7],
          [4, 1, 0, 2, 4],
          [6, 3, 2, 1, 3],
          [8, 5, 4, 3, 2],
          [10, 7, 6, 3, 4],
          [12, 9, 6, 5, 4]
        ],
        op: [
          ["", "insert C", "insert C", "insert G", "insert T"],
          [
            "delete A",
            "replace A by C",
            "replace A by C",
            "replace A by G",
            "replace A by T"
          ],
          ["delete C", "copy C", "copy C", "insert G", "insert T"],
          [
            "delete A",
            "delete A",
            "replace A by C",
            "replace A by G",
            "replace A by T"
          ],
          [
            "delete A",
            "delete A",
            "replace A by C",
            "replace A by G",
            "replace A by T"
          ],
          [
            "delete G",
            "delete G",
            "replace G by C",
            "copy G",
            "replace G by T"
          ],
          ["delete C", "copy C", "copy C", "delete C", "replace C by T"]
        ]
      };

    expect(
      computeTransformTables(
        X,
        Y,
        costCopy,
        costReplace,
        costDelete,
        costInsert
      )
    ).toEqual(transformTable);
  });
});

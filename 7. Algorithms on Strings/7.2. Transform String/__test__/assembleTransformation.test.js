import computeTransformTables from "../computeTransformTables";
import assembleTransformation from "../assembleTransformation";

describe("assembleTransformation", () => {
  it("should return a sequence of operations that transform a string into another", () => {
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
      },
      { op } = computeTransformTables(
        X,
        Y,
        costCopy,
        costReplace,
        costDelete,
        costInsert
      ),
      m = X.length,
      n = Y.length,
      operations = [
        "initial strings",
        "delete A",
        "copy C",
        "delete A",
        "replace A by C",
        "copy G",
        "replace C by T"
      ];

    expect(assembleTransformation(op, m, n)).toEqual(operations);
  });
});

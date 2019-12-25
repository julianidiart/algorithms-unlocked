import computeLCSTable from "../computeLCSTable";
import assembleLCS from "../assembleLCS";

describe("computeLCSTable", () => {
  it("should return the two-dimensional array with the LCS table", () => {
    const X = "CATCGA",
      Y = "GTACCGTCA",
      m = X.length,
      n = Y.length,
      l = computeLCSTable(X, Y),
      LCS = "CTCA";

    expect(assembleLCS(X, Y, l, m, n)).toEqual(LCS);
  });
});

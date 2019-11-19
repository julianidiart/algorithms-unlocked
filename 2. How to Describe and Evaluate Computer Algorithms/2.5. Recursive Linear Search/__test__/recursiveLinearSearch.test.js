import recursiveLinearSearch from "../recursiveLinearSearch";

describe("recursiveLinearSearch", () => {
  it("should search number in an array", () => {
    const array = [1, 4, 3, 5, 7, 1];

    expect(recursiveLinearSearch(array, 8)).toEqual(null);
    expect(recursiveLinearSearch(array, 7)).toEqual(4);
    expect(recursiveLinearSearch(array, 1)).toEqual(0);
  });

  it("should search string in an array", () => {
    const array = ["John", "Paul", "George", "Ringo"];

    expect(recursiveLinearSearch(array, "Pete")).toEqual(null);
    expect(recursiveLinearSearch(array, "John")).toEqual(0);
    expect(recursiveLinearSearch(array, "Ringo")).toEqual(3);
  });
});

import sentinelLinearSearch from "../sentinelLinearSearch";

describe("sentinelLinearSearch", () => {
  it("should search number in an array", () => {
    const array = [1, 4, 3, 5, 7, 1];

    expect(sentinelLinearSearch(array, 8)).toEqual(null);
    expect(sentinelLinearSearch(array, 7)).toEqual(4);
    expect(sentinelLinearSearch(array, 1)).toEqual(0);
  });

  it("should search string in an array", () => {
    const array = ["John", "Paul", "George", "Ringo"];

    expect(sentinelLinearSearch(array, "Pete")).toEqual(null);
    expect(sentinelLinearSearch(array, "John")).toEqual(0);
    expect(sentinelLinearSearch(array, "Ringo")).toEqual(3);
  });
});

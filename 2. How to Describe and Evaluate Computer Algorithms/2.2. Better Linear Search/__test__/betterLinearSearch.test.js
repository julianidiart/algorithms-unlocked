import betterLinearSearch from "../betterLinearSearch";

describe("betterLinearSearch", () => {
  it("should search number in an array", () => {
    const array = [1, 4, 3, 5, 7, 1];

    expect(betterLinearSearch(array, 8)).toEqual(null);
    expect(betterLinearSearch(array, 7)).toEqual(4);
    expect(betterLinearSearch(array, 1)).toEqual(0);
  });

  it("should search string in an array", () => {
    const array = ["John", "Paul", "George", "Ringo"];

    expect(betterLinearSearch(array, "Pete")).toEqual(null);
    expect(betterLinearSearch(array, "John")).toEqual(0);
    expect(betterLinearSearch(array, "Ringo")).toEqual(3);
  });
});

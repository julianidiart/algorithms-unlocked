import binarySearch from "../binarySearch";

describe("binarySearch", () => {
  it("should search number in an array", () => {
    const array = [1, 4, 3, 5, 7, 1];

    expect(binarySearch(array, 8)).toEqual(null);
    expect(binarySearch(array, 7)).toEqual(4);
    expect(binarySearch(array, 1)).toEqual(0);
  });

  it("should search string in an array", () => {
    const array = ["John", "Paul", "George", "Ringo"];

    expect(binarySearch(array, "Pete")).toEqual(null);
    expect(binarySearch(array, "John")).toEqual(0);
    expect(binarySearch(array, "Ringo")).toEqual(3);
  });
});

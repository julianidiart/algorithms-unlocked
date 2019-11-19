import recursiveBinarySearch from "../recursiveBinarySearch";

describe("recursiveBinarySearch", () => {
  it("should search number in an array", () => {
    const array = [1, 4, 3, 5, 7, 1];

    expect(recursiveBinarySearch(array, 8)).toEqual(null);
    expect(recursiveBinarySearch(array, 7)).toEqual(4);
    expect(recursiveBinarySearch(array, 1)).toEqual(0);
  });

  it("should search string in an array", () => {
    const array = ["John", "Paul", "George", "Ringo"];

    expect(recursiveBinarySearch(array, "Pete")).toEqual(null);
    expect(recursiveBinarySearch(array, "John")).toEqual(0);
    expect(recursiveBinarySearch(array, "Ringo")).toEqual(3);
  });
});

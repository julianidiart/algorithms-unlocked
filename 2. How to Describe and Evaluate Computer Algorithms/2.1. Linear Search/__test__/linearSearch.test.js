import linearSearch from "../linearSearch";

describe("linearSearch", () => {
  it("should search number in an array", () => {
    const array = [1, 4, 3, 5, 7, 1];

    expect(linearSearch(array, 8)).toEqual(null);
    expect(linearSearch(array, 7)).toEqual(4);
    expect(linearSearch(array, 1)).toEqual(5);
  });

  it("should search string in an array", () => {
    const array = ["John", "Paul", "George", "Ringo"];

    expect(linearSearch(array, "Pete")).toEqual(null);
    expect(linearSearch(array, "John")).toEqual(0);
    expect(linearSearch(array, "Ringo")).toEqual(3);
  });
});

import reallySimpleSort from "../reallySimpleSort";

describe("reallySimpleSort", () => {
  it("should sort array of 1s and 2s", () => {
    const array = [1, 2, 1, 2, 2, 2, 1, 1, 2, 1, 2];

    expect(reallySimpleSort(array)).toEqual(array.sort());
  });
});

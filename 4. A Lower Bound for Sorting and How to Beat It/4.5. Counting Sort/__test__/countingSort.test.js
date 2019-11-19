import countingSort from "../countingSort";

describe("countingSort", () => {
  it("should sort array of numbers", () => {
    const numbers = [4, 1, 0, 1, 2, 4, 8, 6, 3, 9, 9, 1];

    expect(countingSort(numbers)).toEqual(numbers.sort());
  });
});

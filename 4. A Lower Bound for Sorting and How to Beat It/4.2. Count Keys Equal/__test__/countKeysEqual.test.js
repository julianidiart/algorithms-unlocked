import countKeysEqual from "../countKeysEqual";

describe("countKeysEqual", () => {
  it("should count keys in array of numbers", () => {
    const numbers = [4, 1, 0, 1, 2, 4, 8, 6, 3, 9, 9, 1];
    const countNumbers = [1, 3, 1, 1, 2, 0, 1, 0, 1, 2];

    expect(countKeysEqual(numbers)).toEqual(countNumbers);
  });
});

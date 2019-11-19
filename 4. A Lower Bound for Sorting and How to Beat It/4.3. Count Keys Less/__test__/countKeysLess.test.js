import countKeysLess from "../countKeysLess";
import countKeysEqual from "../../4.2. Count Keys Equal/countKeysEqual";

describe("countKeysLess", () => {
  it("should count accumulated numbers in array of numbers", () => {
    const numbers = [4, 1, 0, 1, 2, 4, 8, 6, 3, 9, 9, 1];
    const countNumbers = countKeysEqual(numbers);
    const lessNumbers = [0, 1, 4, 5, 6, 8, 8, 9, 9, 10];

    expect(countKeysLess(countNumbers)).toEqual(lessNumbers);
  });
});

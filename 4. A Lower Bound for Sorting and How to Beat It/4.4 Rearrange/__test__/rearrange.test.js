import rearrange from "../rearrange";
import countKeysLess from "../../4.3. Count Keys Less/countKeysLess";
import countKeysEqual from "../../4.2. Count Keys Equal/countKeysEqual";

describe("rearrange", () => {
  it("should rearrange numbers in array of numbers", () => {
    const numbers = [4, 1, 0, 1, 2, 4, 8, 6, 3, 9, 9, 1];
    const countNumbers = countKeysEqual(numbers);
    const lessNumbers = countKeysLess(countNumbers);
    const orderedNumbers = [0, 1, 1, 1, 2, 3, 4, 4, 6, 8, 9, 9];

    expect(rearrange(numbers, lessNumbers)).toEqual(orderedNumbers);
  });
});

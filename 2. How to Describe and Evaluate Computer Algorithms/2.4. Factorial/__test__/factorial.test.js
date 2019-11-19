import factorial from "../factorial";

describe("sentinelLinearSearch", () => {
  it("should calculate the factorial of the given number", () => {
    expect(factorial(4)).toBe(24);
    expect(factorial(9)).toBe(362880);
    expect(factorial(1)).toBe(1);
    expect(factorial(0)).toBe(1);
  });
});

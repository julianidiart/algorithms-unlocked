import heapsort from "../heapsort";

describe("heapsort", () => {
  it("should sort array of numbers", () => {
    const array = [9, 20, 1, 5, 7, 32, -4, 15];

    expect(heapsort(array)).toEqual(array.sort((a, b) => a - b));
  });

  it("should sort array of strings", () => {
    const array = [
      "Octavio Paz",
      "Douglas Adams",
      "Isaac Asimov",
      "George Orwell",
      "Pablo Neruda",
      "Aldous Huxley",
      "Terry Pratchett",
      "Julio Cortázar"
    ];

    expect(heapsort(array)).toEqual(array.sort());
  });
});

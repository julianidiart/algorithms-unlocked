import selectionSort from "../selectionSort";

describe("selectionSort", () => {
  it("should sort array of numbers", () => {
    const array = [9, 20, 1, 5, 7, 32, -4, 15];

    expect(selectionSort(array)).toEqual(array.sort());
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

    expect(selectionSort(array)).toEqual(array.sort());
  });
});

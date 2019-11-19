import mergeSort from "../mergeSort";

describe("mergeSort", () => {
  it("should sort array of numbers", () => {
    const array = [9, 20, 1, 5, 7, 32, -4, 15];

    expect(mergeSort(array)).toEqual(array.sort());
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

    expect(mergeSort(array)).toEqual(array.sort());
  });
});

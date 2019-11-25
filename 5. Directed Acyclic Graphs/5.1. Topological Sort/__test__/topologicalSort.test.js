import topologicalSort from "../topologicalSort";

describe("topologicalSort", () => {
  it("should sort a directed acyclic graph topologically", () => {
    const dagAdjacencyList = {
      undershorts: ["compression shorts"],
      socks: ["hose"],
      "compression shorts": ["hose", "cup"],
      hose: ["pants"],
      cup: ["pants"],
      pants: ["skates", "sweater"],
      skates: ["leg pads"],
      "leg pads": ["catch glove"],
      "t-shirt": ["chest pad"],
      "chest pad": ["sweater"],
      sweater: ["mask"],
      mask: ["catch glove"],
      "catch glove": ["blocker"],
      blocker: []
    };

    const dagTopologicallySorted = [
      "t-shirt",
      "chest pad",
      "socks",
      "undershorts",
      "compression shorts",
      "cup",
      "hose",
      "pants",
      "sweater",
      "mask",
      "skates",
      "leg pads",
      "catch glove",
      "blocker"
    ];

    expect(topologicalSort(dagAdjacencyList)).toEqual(dagTopologicallySorted);
  });
});

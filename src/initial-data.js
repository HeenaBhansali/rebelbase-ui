const initialData = {
  stages: ["Ideation", "Validation"],
  items: [
    { id: "0", content: "Problem", stage: "Ideation" },
    { id: "1", content: "Solution", stage: "Ideation" },
    { id: "2", content: "Team", stage: "Ideation" },
    { id: "3", content: "Ecosystem", stage: "Validation" },
    { id: "4", content: "Results", stage: "Validation" }
  ],
  columns: {
    "column-1": {
      id: "column-1",
      title: "Social Inovation",
      itemIds: ["0", "1", "2", "3", "4"]
    }
  },
  columnOrder: ["column-1"]
}

export default initialData

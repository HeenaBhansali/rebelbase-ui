const initialData = {
  items: {
    "item-1": { id: "item-1", content: "Problem" },
    "item-2": { id: "item-2", content: "Solution" },
    "item-3": { id: "item-3", content: "Team" },
    "item-4": { id: "item-4", content: "Ecosystem" },
    "item-5": { id: "item-5", content: "Results" }
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "Social Inovation",
      itemIds: ["item-1", "item-2", "item-3", "item-4", "item-5"]
    }
  },
  columnOrder: ["column-1"]
}

export default initialData

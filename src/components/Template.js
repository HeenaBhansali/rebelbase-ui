import React, { useState } from "react"
import Column from "./Column"
import { DragDropContext } from "react-beautiful-dnd"
import initialData from "../initial-data"

const Template = () => {
  const [data, setData] = useState(initialData)

  const onDragEnd = result => {
    const { destination, source, draggableId } = result

    if (!destination) {
      return
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    const column = data.columns[source.droppableId]
    const newItemIds = Array.from(column.itemIds)
    newItemIds.splice(source.index, 1)
    newItemIds.splice(destination.index, 0, draggableId)

    const newColumn = {
      ...column,
      itemIds: newItemIds
    }

    const newState = {
      ...data,
      columns: {
        ...data.columns,
        [newColumn.id]: newColumn
      }
    }

    setData(newState)
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        {data.columnOrder.map(columnId => {
          const column = data.columns[columnId]
          const items = column.itemIds.map(itemId => data.items[itemId])
          return <Column key={columnId} column={column} items={items} />
        })}
      </div>
    </DragDropContext>
  )
}

export default Template

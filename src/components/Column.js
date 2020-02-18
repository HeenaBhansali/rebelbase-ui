import React, { useState } from "react"
import styled from "styled-components"
import Card from "./Card"
import { Droppable } from "react-beautiful-dnd"

const Title = styled.h3`
  padding-left: 10px;
`

const CardList = styled.div`
  padding: 10px;
  transition: background-color 1s ease;
  background-color: ${props => (props.isDraggingOver ? "lightblue" : "white")};
`

const Column = ({ column, items }) => {
  return (
    <div>
      <span>{column.title}</span>
      <Droppable droppableId={column.id}>
        {(provided, snapshot) => (
          <CardList
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {items.map((item, index) => (
              <Card key={item.id} item={item} index={index} />
            ))}
            {provided.placeholder}
          </CardList>
        )}
      </Droppable>
    </div>
  )
}

export default Column

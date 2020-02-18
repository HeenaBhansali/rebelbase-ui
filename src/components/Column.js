import React, { useState } from "react"
import styled from "styled-components"
import Card from "./Card"
import { Droppable } from "react-beautiful-dnd"

const Container = styled.div`
  margin: 10px;
  border: 1px solid lightgrey;
  border-radius: 2px;
`

const Title = styled.h3`
  padding: 10px;
`

const CardList = styled.div`
  padding: 10px;
  transition: background-color 1s ease;
  background-color: ${props => (props.isDraggingOver ? "lightblue" : "white")};
`

const Column = ({ column, items, type }) => {
  return (
    <Container>
      <Title>{column.title}</Title>
      <Droppable droppableId={column.id}>
        {(provided, snapshot) => (
          <CardList
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {items.map((item, index) => (
              <Card key={item.id} item={item} index={index} type={type} />
            ))}
            {provided.placeholder}
          </CardList>
        )}
      </Droppable>
    </Container>
  )
}

export default Column

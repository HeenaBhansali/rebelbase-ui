import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Draggable } from "react-beautiful-dnd"
import ItemContainer from "./ItemContainer"

const Section = styled.section`
  width: 250px;
  margin: 10px;
  height: 50px;
  border: 1px solid blue;
  border-radius: 2px;
  padding: 10px;
  box-shadow: 2px 2px blue;
  text-shadow: 0px 1px black;
  color: black;
  background-color: ${props => (props.isDragging ? "lightblue" : "white")};
`

const Card = ({ item, index }) => {
  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided, snapshot) => (
        <Section
          {...provided.draggableProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          <img
            src="https://img.icons8.com/color/16/000000/drag-reorder.png"
            {...provided.dragHandleProps}
          ></img>
          {item.content}
        </Section>
      )}
    </Draggable>
  )
}

export default Card

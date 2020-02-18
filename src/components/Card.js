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

const Card = ({ item, index, type }) => {
  const [template, setTemplate] = useState(false)
  const [isTemplate, setIsTemplate] = useState(false)
  if (type === template) setIsTemplate(true)

  const createTemplate = (provided, snapshot) => {
    if (isTemplate) {
      console.log("isTemlate", isTemplate)
      return (
        <Section
          {...provided.draggableProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          <img
            src="https://img.icons8.com/color/16/000000/drag-reorder.png"
            {...provided.dragHandleProps}
          ></img>
          <ItemContainer item={item} />
        </Section>
      )
    }
    return null
  }

  console.log(item)
  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided, snapshot) => createTemplate(provided, snapshot)}
    </Draggable>
  )
}

export default Card

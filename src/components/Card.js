import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Draggable } from "react-beautiful-dnd"
import ItemContainer from "./ItemContainer"

const Section = styled.section`
  display: flex;
`

const Image = styled.img`
  width: 20px;
  height: 30px;
  margin-top: 30px;
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
          <Image
            src="https://img.icons8.com/color/16/000000/drag-reorder.png"
            {...provided.dragHandleProps}
          ></Image>
          <ItemContainer item={item} />
        </Section>
      )}
    </Draggable>
  )
}

export default Card

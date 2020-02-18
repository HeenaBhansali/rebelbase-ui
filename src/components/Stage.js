import React, { useState } from "react"
import styled from "styled-components"
import ItemContainer from "./ItemContainer"

const Button = styled.button`
  color: rgb(66, 160, 174);
  margin-left: 150px;
  border: none;
`

const Stage = ({ stage, data }) => {
  const [selectAll, setSelectAll] = useState(false)
  const [itemStatuses, setItemStatuses] = useState(new Array(5).fill(false))

  const handleClick = itemIndex => {
    setItemStatuses(new Array(5).fill(!selectAll))
    setSelectAll(prevState => !prevState)
  }
  const setItemStatus = index => {
    setItemStatuses(prevState => {
      prevState[index] = !prevState[index]
      return [...prevState]
    })
  }
  return (
    <div>
      <span>{stage}</span>
      <Button onClick={handleClick}>
        {itemStatuses.includes(false)
          ? `Select all in ${stage}`
          : `Unselect all in ${stage}`}
      </Button>

      {data.map((item, index) => {
        return (
          <ItemContainer
            key={item.id}
            item={item}
            selectStatus={itemStatuses[index]}
            setItemStatus={setItemStatus}
            index={index}
            isStage
          />
        )
      })}
    </div>
  )
}

export default Stage

import React, { useState } from "react"
import styled from "styled-components"
import ItemContainer from "./ItemContainer"

const Button = styled.button`
  color: rgb(66, 160, 174);
  margin-left: 150px;
  border: none;
`

const Stage = ({ stage, data }) => {
  console.log("Stage", stage)
  const [selectAll, setSelectAll] = useState(false)
  return (
    <div>
      <span>{stage}</span>
      <Button onClick={() => setSelectAll(!selectAll)}>
        {!selectAll ? `Select all in ${stage}` : `Unselect all in ${stage}`}
      </Button>
      {data.map(item => (
        <ItemContainer key={item.id} item={item} selectStatus={selectAll} />
      ))}
    </div>
  )
}

export default Stage

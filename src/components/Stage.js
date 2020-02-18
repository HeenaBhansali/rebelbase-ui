import React from "react"
import styled from "styled-components"

import ItemContainer from "./ItemContainer"

const Stage = ({ item, data }) => {
  console.log("item in allcard", item)
  return (
    <div>
      <span>{item}</span>
      {Object.values(data[item]).map(item => (
        <ItemContainer key={item.id} item={item} />
      ))}
    </div>
  )
}

export default Stage

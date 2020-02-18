import React, { useState } from "react"
import Item from "./Item"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
`

const Button = styled.button`
  margin: auto;
  border-radius: 50%;
  width: 20px;
  height: 20px;
`
const DueDateSection = styled.div`
  margin: 30px;
  margin-left: 50px;
`
const Input = styled.input.attrs({ type: "date" })`
  margin: 10px;

  ::-webkit-calendar-picker-indicator {
    background: url(https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/calendar-16.png)
      center/80% no-repeat;

    color: rgba(0, 0, 0, 0);
    opacity: 0.5;
    margin: 10px;
  }

  ::-webkit-calendar-picker-indicator: hover {
    opacity: 0.8;
  }

  ::-webkit-inner-spin-button {
    display: none;
    -webkit-appearance: none;
  }
`

const ItemContainer = ({ item }) => {
  const [activeState, setActiveState] = useState(false)

  return (
    <Container>
      <Button
        onClick={() => setActiveState(!activeState)}
        style={{ backgroundColor: activeState ? "rgb(66,160,174)" : "white" }}
      />
      <Item key={item.id} item={item.content} />
      <DueDateSection>
        <Input type="date" />
        <input type="time" />
      </DueDateSection>
    </Container>
  )
}

export default ItemContainer

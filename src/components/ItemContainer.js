import React, { useState, useEffect } from "react"
import Item from "./Item"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
`

const Button = styled.button`
  margin: 10px;
  margin-top: 35px;
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

const Time = styled.input.attrs({ type: "time" })`
  ::-webkit-datetime-picker-indicator {
    background: url(https://img.icons8.com/pastel-glyph/64/000000/clock.png)
      center/80% no-repeat;

    color: rgba(0, 0, 0, 0);
    opacity: 0.5;
    margin: 10px;
  }
`

const ItemContainer = ({
  index,
  item,
  selectStatus,
  isStage = false,
  setItemStatus = () => null
}) => {
  const [buttonStatus, setButtonStatus] = useState(true)
  const handleClick = () => {
    if (isStage) return setItemStatus(index)
    setButtonStatus(!buttonStatus)
  }

  const isSelected = () => (!isStage && buttonStatus) || selectStatus

  const renderButton = clickHandler => {
    return (
      <Button
        onClick={clickHandler}
        style={{
          backgroundColor: isSelected() ? "rgb(66,160,174)" : "white"
        }}
      />
    )
  }

  return (
    <Container>
      {renderButton(handleClick)}
      <Item key={item.id} item={item.content} />
      {isSelected() && (
        <DueDateSection>
          <Input type="date" />
          <Time type="date" />
        </DueDateSection>
      )}
    </Container>
  )
}

export default ItemContainer

import React from "react"

import styled from "styled-components"

const Section = styled.section`
  width: 250px;
  margin: 10px;
  height: 50px;
  border: 1px solid rgb(94, 194, 204);
  border-radius: 2px;
  padding: 10px;
  box-shadow: 2px 2px rgb(192, 192, 193);
  text-shadow: 0px 1px black;
  color: black;
  background-color: white;
`

const Item = ({ item }) => {
  return <Section>{item}</Section>
}

export default Item

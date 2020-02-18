import React, { useState } from "react"
import styled from "styled-components"
import initialData from "../initial-dataAll"
import Stage from "./Stage"

const Container = styled.div`
  width: 60%;
  border: 1px solid black;
  position: absolute;
  margin-left: 20%;
  margin-right: 20%;
  color: black;
  box-shadow: 6px 20px 20px 0px #00000057;
  display: grid;
  grid-template-columns: 20% 80%;
`
const Section = styled.section`
  padding-left: 10px;
`

const Builder = () => {
  const [data, setData] = useState(initialData)

  return (
    <Container>
      <Section></Section>
      <Section>
        <h1>Select Builder Schedule - 2019 Fall Cohort</h1>
        {Object.keys(data).map((items, index) => {
          return <Stage item={items} key={index} data={data} />
        })}
      </Section>
    </Container>
  )
}

export default Builder

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
  padding: 20px;
  color: black;
  box-shadow: 6px 20px 20px 0px #00000057;
  display: grid;
  grid-template-columns: 20% 80%;
`
const Section = styled.section`
  padding-left: 10px;
`

const Div = styled.div`
  border: 1px solid rgb(241, 242, 242);
  padding: 10px;
`

const Aside = styled.aside`
  margin: 15px;
  padding-top: 50px;
`

const Button = styled.button`
  text-align: left;
  margin-top: 10px;
  margin-bottom: 10px;
  display: block;
  width: 150px;
  height: 25px;
  border: none;
  font-size: inherit;
  font-weight: 500;
`

const Span = styled.span`
  padding-left: 5px;
  color: rgb(174, 173, 174);
`

const Builder = () => {
  const [data, setData] = useState(initialData)

  return (
    <Container>
      <Aside>
        <Button>All</Button>
        <Span> Templates</Span>
        <Button>Social Innovation</Button>
      </Aside>
      <Section>
        <h1>Select Builder Schedule - 2019 Fall Cohort</h1>
        <Div>
          {Object.keys(data).map((items, index) => {
            return <Stage item={items} key={index} data={data} />
          })}
        </Div>
      </Section>
    </Container>
  )
}

export default Builder

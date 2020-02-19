import React, { useState } from "react"
import styled from "styled-components"
import initialData from "../initial-data"
import Stage from "./Stage"
import Template from "./Template"

const Container = styled.div`
  width: max-content;
  border: 1px solid black;
  position: absolute;
  margin-left: 20%;
  margin-right: 20%;
  padding: 20px;
  color: black;
  box-shadow: 10px 20px 20px rgb(137, 140, 140);
  display: grid;
  grid-template-columns: 20% 80%;
`
const Section = styled.section`
  padding-left: 10px;
  width: max-content;
  padding-left: 10px;
  margin-left: auto;
`

const Div = styled.div`
  width: 700px;
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
const getStageItems = stage =>
  initialData.items.filter(item => item.stage === stage)
const Builder = () => {
  const [data, setData] = useState(initialData)
  const [showAll, setShowAll] = useState(true)

  return (
    <Container>
      <Aside>
        <Button
          onClick={() => {
            setShowAll(true)
          }}
          style={{
            backgroundColor: showAll && "rgb(227,228,228)"
          }}
        >
          All
        </Button>
        <Span> Templates</Span>
        <Button
          onClick={() => setShowAll(false)}
          style={{
            backgroundColor: !showAll && "rgb(227,228,228)"
          }}
        >
          Social Innovation
        </Button>
      </Aside>
      <Section>
        <h1>Select Builder Schedule - 2019 Fall Cohort</h1>
        <Div>
          {showAll ? (
            data.stages.map((stage, index) => {
              return (
                <Stage stage={stage} key={index} data={getStageItems(stage)} />
              )
            })
          ) : (
            <Template />
          )}
        </Div>
      </Section>
    </Container>
  )
}

export default Builder

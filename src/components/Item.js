import React from "react"
import styled from "styled-components"
import redTriangle from "../images/redTriangle.png"
import whiteTriangle from "../images/whiteTriangle.png"

const Section = styled.section`
  width: 250px;
  margin: 10px;
  height: 50px;
  border: 1px solid rgb(94, 194, 204);
  border-radius: 2px;
  padding: 10px;
  box-shadow: 5px 8px 8px rgb(194, 194, 194);
  color: black;
  background-color: white;
`

const Span = styled.span`
  color: rgb(66, 160, 174);
  font-size: small;
  font-weight: 100;
`
const P = styled.p`
  margin: auto;
  padding-bottom: 20px;
`

const Div = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
`
const Image = styled.img`
  height: 50px;
  width: 60px;
`

const Item = ({ item, isSelected }) => {
  return (
    <Section>
      <Div>
        <div>
          <P> {item}</P>
          <Span>View Builder</Span>
        </div>
        <div>
          {isSelected ? (
            <Image src={redTriangle} />
          ) : (
            <Image src={whiteTriangle} />
          )}
        </div>
      </Div>
    </Section>
  )
}

export default Item

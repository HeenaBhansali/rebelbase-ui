import React from "react"
import Builder from "./components/Builder"
import styled from "styled-components"

const Container = styled.div`
  background-color: rgb(112, 127, 128);
`

function App() {
  return (
    <Container>
      <Builder />
    </Container>
  )
}

export default App

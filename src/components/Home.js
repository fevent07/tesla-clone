import React from 'react'
import styled from 'styled-components'
import Section from "./Section"

function Home() {
  return (
    <Container> 
        <Section
          title= "Model F"
          description="A collection of models and their properties."
          backgroundImg="model-s.jpg"
          leftBtnText=" Existing inventory"
          rightBtnText="Customer order"
        /> 
        <Section
          title= "Model E"
          description="A collection of models and their properties."
          backgroundImg="model-3.jpg"
          leftBtnText=" Existing inventory"
          rightBtnText="Customer order"
        /> 
        <Section
          title= "Model V"
          description="A collection of models and their properties."
          backgroundImg="model-x.jpg"
          leftBtnText=" Existing inventory"
          rightBtnText="Customer order"
        /> 
          <Section
          title= " lowest cost solar panels"
          description="Money back guarantee"
          backgroundImg="solar-panel.jpg"
          leftBtnText=" Order now"
          rightBtnText=" Learn more"
        />
          <Section
          title= "Accessories"
          description=" "
          backgroundImg="accessories.jpg"
          leftBtnText=" Shop now"
          rightBtnText=""
        />
    <Section
          title= "Accessories"
          description=" "
          backgroundImg="solar-roof.jpg"
          leftBtnText=""
          rightBtnText=" sfdfdf"
        />
    </Container> 
  )
}

export default Home

const Container =styled.div`
height: 100vh;

`
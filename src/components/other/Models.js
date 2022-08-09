import React from 'react'
import styled from "styled-components"

function Models() {
  return (
    <Container>Models

    <Inside>
        This is a model for your application. You can use it to create and edit models. You can also    create  a new model using   the create  model method. You can also create a new model using the
    </Inside>
    </Container>
  )
}

export default Models

const Container = styled.div`
 

`
const Inside = styled.div`
 font-size: 24px;
 text-align: center;
 align-items: center;
 margin-top: 20px;

`


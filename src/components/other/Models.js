import React from 'react';
import Header from "../Header";
import styled from "styled-components"

function Models() {
  return (
    <Container>
      <HeaderContainer>
      <Header />
      </HeaderContainer>
      
      {/* <img src="/images/model-s.jpg" alt=" models"/> */}

    <Inside>
        This is a model for your application. You can use it to create and edit models. You can also    create  a new model using   the create  model method. You can also create a new model using the
    </Inside>
    </Container>
  )
}

export default Models

const Container = styled.div`
 background-image: url("/images/solar-roof.jpg");
 background-repeat: no-repeat;
 background-position: center;
 background-size: cover;
 height:70vh;
 width:100%;
display:flex;
flex-direction: column;

`
const Inside = styled.div`
 font-size: 24px;
 text-align: center;
 align-items: center;
 margin: 10rem 15rem;
 background-color: rgba(255, 255, 255, 0.8);
 color: grey;
 padding: 2rem 3rem;
 `
 const HeaderContainer = styled.div`
//  background-color: rgba(0, 25, 255, 0.8);  
background-color: black;
z-index: 1;
 
 `



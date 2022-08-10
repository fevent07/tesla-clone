import React from 'react';
import Home from "./Home";
import Header  from "./Header";
import styled from "styled-components";

function App() {
  return (
    <Container>
      
      <Header />
      <Home />
     
    </Container>
  );
}

export default App;

const Container = styled.div`
 display: flex;
 align-items: center;
`

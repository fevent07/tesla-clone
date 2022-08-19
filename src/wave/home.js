import React from 'react';
import Wave from "./wave";
import WaveTwo from './waveTwo';
import styled from "styled-components";

function home() {
  return (
    <Container>
      
      <Wave />
      <WaveTwo />
     
    </Container>
  );
}

export default home;

const Container = styled.div`
 display: flex;
 flex-direction: column;
//  position:relative;
 align-items: center;
 justify-content: center;
`

import React from 'react'
import styled from "styled-components";
// import WaveTwo from "./waveTwo";
function wave() {
  return (

    <Container>
        <p>wave</p>
        {/* <img src="./images/solar-roof.jpg"></img> */}
        {/* <svg container ></svg> */}
        <svg id="visual" viewBox="0 0 900 300" width="100vw" height="600" xmlns="http://www.w3.org/2000/svg" xmlns-xlink="http://www.w3.org/1999/xlink" version="1.1">
            <rect x="0" y="0" width="100vh" height="100vh"  fill-opacity="0.0"></rect>
            <path d="M0 319L50 305.8C100 292.7 200 266.3 300 284.3C400 302.3 500 364.7 600 378C700 391.3 800 355.7 850 337.8L900 320L900 601L850 601C800 601 700 601 600 601C500 601 400 601 300 601C200 601 100 601 50 601L0 601Z" 
            fill="#000" stroke-linecap="round" stroke-linejoin="miter"></path></svg>
        </Container>
    
  )
}

export default wave
// const MainContainer= styled.div`

// display:flex;
// flex-direction: column; 
// `
const Container = styled.div`

    display: flex;
    position:sticky;
    Overflow-x: hidden;
    flex-direction:column;
    width: 100vw;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${"./images/solar-roof.jpg"});
    overflow:hidden;


`
// const SecondContainer = styled.div`
//     display:flex;
//     width: 100vw;
//     height: 100vh;
//     background:#000;
// `
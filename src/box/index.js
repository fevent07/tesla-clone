import React from 'react';
// import styled from "styled-components";
import './style.css';


function index() {
  return (
    <div class="cube">
        <div>
            <p>hey</p>
            <span>hey you</span>
        {/* <span style="--i:0;"> </span>
        <span style="--i:1;"> </span>
        <span style="--i:2;"> </span>
        <span style="--i:3;"> </span> */}
        <span style={("--i:0;")}></span>
        <span style={("--i:1;")}></span>
        <span style={("--i:2;")}></span>
        <span style={("--i:3;")}></span>
        </div>
    </div>
    // <Container>
      
    //   <Header />
    //   <Home />
     
    // </Container>
  );
}


export default index;

// const Container = styled.div`
//  display: flex;
//  align-items: center;
// `

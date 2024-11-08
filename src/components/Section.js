import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Section({title, description, leftBtnText, rightBtnText, backgroundImg}) {
    // console.log(props);
  return ( 
    <Wrap bgImage={backgroundImg}>     
      <Fade bottom>
       <ItemText>
            <h1>
                {title}
            </h1>
            <p>
                {description} 
            </p>
        </ItemText>
      </Fade>
        <Buttons>
          <Fade bottom>
            <ButtonGroup>
                {leftBtnText &&
                    <LeftButton> {leftBtnText} </LeftButton>
                }
                { rightBtnText &&
                    <RightButton> {rightBtnText} </RightButton>
                }
            </ButtonGroup>
          </Fade>
        <DownArrow src="/images/down-arrow.svg"/>
        </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: ${props => `url("/images/${props.bgImage}")`};
    display:flex;
    flex-direction: column;   
    justify-content: space-between;
    align-items: center;
    `
const ItemText = styled.div`
padding-top: 15vh;
text-align: center;

`
const ButtonGroup = styled.div`
display: flex;
justify-content: center;  
margin-bottom: 10px;
    @media (max-width: 768px) { 
        flex-direction: column;
    }
`

const LeftButton = styled.div`

background-color:rgba(23, 26, 32, 0.8);
height:40px;    
width:256px;
color: white;
display: flex;
justify-content: center;
align-items: center;
border-radius:100px;
opacity:0.85;
text-transform: uppercase;
font-size: 12px;
margin:8px;
cursor: pointer;

`
const RightButton = styled(LeftButton)`
background:white;
opacity:0.65;
color:black;

`
 const DownArrow = styled.img`
 margin-top: 20px;
 height: 40px;
 overflow-x: hidden;
 animation: animationDown infinite 1.5s;
 `
 const Buttons = styled.div`

 `
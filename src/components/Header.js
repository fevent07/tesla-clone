import React, { useState } from 'react'
import styled from "styled-components"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';
import { Routes, Route, useNavigate} from "react-router-dom";
import Models from "./other/Models"

function Header() {
    const navigate = useNavigate();
    const [burgerState, setBurgerState] = useState(false);
    const cars = useSelector(selectCars);
      // console.log(cars);
    // const navigateModels = () => {
    //   navigate('/Models');
    // };

  return (
    <Container>
        <a>
          <img src="/images/logo.svg" alt=" logo"/>
        </a>
        <Menu>
          <></>
              {cars && cars.map((car, index)=>(
                <p><a href ="#">{car}</a></p>

              ))}
        </Menu>
        <RightMenu>
          
        <a href ="#"> Shop</a>
        <a href ="#"> Shop</a>
        <a href ="#"> Shop</a>
        <a href ="#"> Shop</a>
          <a href ="#"> Shop</a>
          <a href ="#"> Shop</a>
          <a href ="#"> Shop</a>
          <a href ="#"> Tesla Account</a>
          <CustomMenu onClick={()=>setBurgerState(true)} />
        </RightMenu>
        <BurgerNav show={burgerState}>
          <CloseWrapper>
              <CustomCloses onClick = {() => setBurgerState(false)}/>
          </CloseWrapper>
                {cars && cars.map((car, index)=> (
                <li><a href ="#">{car}</a></li>
                ))}
          {/* <Routes> */}
          {/* <li onClick={navigateModels}> */}
          {/* <li>
            <Route path ="/Models" element={<Models/>}/>
          </li>
          </Routes> */}
          <li> <a href ="#"> Used Inventory</a></li>
          <li><a href ="#"> Trade-In </a></li>
          <li><a href ="#"> Inventory </a></li>
          <li><a href ="#"> Inventory </a></li>

        </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;

`

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex:1;
  p{
    font-weight: 600;
    text-decoration: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;

  }
  @media(max-width:768px) {
    justify-content: space-between;
    display: none;
  }

`
const RightMenu= styled.div`
  display: flex;
  align-items: center;
  a{
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`
const BurgerNav = styled.nav`
  position:fixed;
  TOP:0;
  bottom: 0;
  right: 0; 
  background: white;
  width: 300px;
  z-index: 1;
  list-style: none;
  padding:20px;
  display:flex;
  flex-direction: column;
  text-align: start;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.2s;
  li{
    padding:15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a{
      font-weight:600;
    }
  }
  justify-content: flex-start;
  
`
const CustomClose = styled(CloseIcon)`
   cursor: pointer;

`
const CloseWrapper = styled.div`
display: flex;
justify-content: flex-end;
`

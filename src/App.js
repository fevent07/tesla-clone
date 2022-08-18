import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
// import Models from "./components/other/Models";
import './App.css';
import HomeOne from "./components/HomeOne";
import Header  from "./components/Header";
import {Routes, Route, useNavigation} from "react-router-dom";
import styled from "styled-components";
import Models from "./components/other/Models";
import { display } from '@mui/system';
import Box from "./box/index.js";
// import Table from "./table/table.html";
// var Table =require("./table/table.html");

function App() {
  return (
    <Container>
      <Routes>
        <Route exact path="/" element={<HomeOne/>}/>
        <Route exact path="/Models" element={<Models/>}/>
        <Route exact path="/Box" element={<Box/>}/>
        {/* <Route exact path="/table" element={<Table/>}/> */}
        {/* <iframe src={Table }></iframe>   /* like this */ }
      {/* <Counter /> */}
      {/* <Models /> */}
      {/* <Header /> */}
      {/* <Home /> */}
      </Routes>
    </Container>
  );
}

export default App;

const Container = styled.div`
 display: flex;
 align-items: center;
`

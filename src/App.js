import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
// import Models from "./components/other/Models";
import './App.css';
import Home from "./components/Home";
import Header  from "./components/Header"
function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <Models /> */}
      <Header />
      <Home />
    </div>
  );
}

export default App;

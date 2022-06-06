import React from "react";
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import './App.css';
import Body from "./Body";
import Header from "./Header";
//import styled from "styled-components";

function App() {
  return (
    <Router>
       <Routes>
          <Route path="/" element={<><Header/><Body/></>}/>
          {/* <Route path="/login" />
          <Route path="about" /> */}
       </Routes> 
     </Router>   
  );
}

export default App;


import React from "react";
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import './App.css';
import Home from "./Home";
import Header from "./Header";
//import styled from "styled-components";

function App() {
  return (
    <Router>
       <Routes>
          <Route path="/" element={
          <>
          <Header/>
          <Home/>
          </>}/>
          <Route path="/login" />
          <Route path="/about" />
          <Route path="/order" element={
            <>
            <Header/>
            </>
          } />
          <Route path="/cart" element={
            <>
            <Header/>
            </>
          }  />
       </Routes> 
     </Router>   
  );
}

export default App;


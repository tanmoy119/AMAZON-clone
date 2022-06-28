import React from "react";
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import './App.css';
import Home from "./Home";
import Header from "./Header";
import ItemPage from "./ItemPage";
import Cart from "./Cart";
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
          <Route path="/login" element={
            <>
            
            </>
          }/>
          <Route path="/about" />
          <Route path="/order" element={
            <>
            <Header/>
            </>
          } />
          <Route path="/item" element={
            <>
            <Header/>
            <ItemPage/>
            </>
          } />
          <Route path="/cart" element={
            <>
            <Header/>
            <Cart/>
            </>
          }  />
       </Routes> 
     </Router>   
  );
}

export default App;


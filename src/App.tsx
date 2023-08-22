import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';

import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
   </Routes>
   </div>



  );
}

export default App;

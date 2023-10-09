import React from "react";
import Preload from "./Components/Preload";
import Login from "./Components/Login";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import './index.css'

const App:React.FC=()=>{
  return(
    <div id="app">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Preload/>
        }></Route>
        <Route path="/login" element={
          <Login/>
        }></Route>
      </Routes>
      </BrowserRouter>
    </div>
    
  )
}

export default App
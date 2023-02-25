import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs/AboutUs";
import Navbar from "./components/Navbar/Navbar";
import FloatMenu from "./components/FloatMenu/FloatMenu";
import Food from "./components/Food/Food";
import Login from "./components/Login/Login";

import { useState } from "react";

function App(){
  const [closeChange, setCloseChange] = useState()
  const [loggedUser, setLoggedUser] = useState(null);
  
  
  return(
    <>
    <Navbar setCloseChange={setCloseChange} loggedUser={loggedUser} setLoggedUser={setLoggedUser} />
    <Routes>
      <Route path="/" element={<Home closeChange={closeChange} />} />
      <Route path="/floatMenu" element={<FloatMenu />} />
      <Route path="/aboutUs" element={<AboutUs closeChange={closeChange}  />} />
      <Route path="/food" element={<Food closeChange={closeChange} />} />
      <Route path="/login" element={<Login closeChange={closeChange} setLoggedUser={setLoggedUser} />} />
    </Routes>
    </>
  )
}

export default App

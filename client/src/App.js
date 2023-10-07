import Home from "./components/Home/Home";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import AboutUs from "./components/AboutUs/AboutUs";
import Navbar from "./components/Navbar/Navbar";
import FloatMenu from "./components/FloatMenu/FloatMenu";
import Food from "./components/Food/Food";
import Login from "./components/Login/Login";
import Order from "./components/Order/Order";
import Photos from "./components/Photos/Photos";
import Book from "./components/Book/Book";
import { getUser } from "./components/Login/JS/login"
import Admin from "./components/Admin/Admin";
import Staff from "./components/Staff/Staff";

import { useState, useEffect } from "react";

function App(){
  const [closeChange, setCloseChange] = useState()
  const [loggedUser, setLoggedUser] = useState(null);
  const [user, setUser] = useState(getUser()?.result);
  const [addToCart, setAddToCart] = useState(getUser()?.result?.cart);
  const [staff, setStaff] = useState("")
  let location = useLocation();
  
  
  useEffect(()=>{
    setUser(getUser()?.result)
    setAddToCart(getUser()?.result?.cart)
  },[location]);
  
  return(
    <>
    <Navbar setCloseChange={setCloseChange} loggedUser={loggedUser} setLoggedUser={setLoggedUser} setUser={setUser} addToCart={addToCart} />
    <Routes>
      <Route path="/" element={<Home closeChange={closeChange} />} />
      <Route path="/floatMenu" element={<FloatMenu />} />
      <Route path="/aboutUs" element={<AboutUs closeChange={closeChange}  />} />
      <Route path="/food" element={<Food closeChange={closeChange} setAddToCart={setAddToCart} />} />
      <Route path="/login" element={<Login closeChange={closeChange} setLoggedUser={setLoggedUser} />} />
      <Route path="/order" element={user?  <Order closeChange={closeChange} addToCart={addToCart} setAddToCart={setAddToCart} /> :  <Navigate to="/" replace={true} />} />
      <Route path="/photos" element = { <Photos closeChange={closeChange}  /> } />
      <Route path="/book" element = { <Book closeChange={closeChange}  /> } />
      <Route path="/admin" element = { <Admin closeChange={closeChange} setStaff={setStaff}  /> } />
      <Route path="/staff" element = { <Staff closeChange={closeChange} staff={staff}  /> } />

    </Routes>
    </>
  )
}

export default App

import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes, 
} from "react-router-dom";
import Home from './page/Home'
import Profile from './page/Profile'
import Login from './page/Login'
import Cookies from "universal-cookie";

export default function router() {

  const isLogged = isLogged();
  
  return (
    <Router>
      <div>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login islogged={ isLogged } />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      </div>
    </Router>
  );
}

function isLogged(){
  const cookie = new Cookies();
  if(cookie.get('login')){
    return true;
  }
  return false;
}


function NotFound() {
  return (
    <div>
      <h2>404</h2>
    </div>
  );
}

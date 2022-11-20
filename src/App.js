import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes, 
} from "react-router-dom";

import Home from './page/Home'
import Profile from './page/Profile'
import Login from './page/Login'


export default function router() {
  const [islogged, setIsLogged] = useState(false);
  
  const cookie = new Cookies();
  if(cookie.get('login')){
    setIsLogged(true);
  }

  return (
    <Router>
      <div>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login islogged={ islogged } />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      </div>
    </Router>
  );
}

function NotFound() {
  return (
    <div>
      <h2>404</h2>
    </div>
  );
}

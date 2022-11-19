import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes, 
} from "react-router-dom";

import Home from './page/Home'
import Profile from './page/Profile'
import Login from './page/Login'
import MyBooks from './page/MyBooks'


export default function router() {
  return (
    <Router>
      <div>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/my_books" element={<MyBooks />} />
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

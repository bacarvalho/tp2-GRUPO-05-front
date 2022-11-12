import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes, 
} from "react-router-dom";

import View from './page/Home'
import Profile from './page/Profile'



export default function router() {
  return (
    <Router>
      <div>
       <Routes>
        <Route path="/" element={<View />} />
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

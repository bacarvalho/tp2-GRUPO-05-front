import React from "react";
import {
  BrowserRouter,
  Route,
  Routes, 
  useLocation
} from "react-router-dom";
import Home from './page/Home'
import BookDetails from './page/BookDetails'
import Login from './page/Login'
import MyLoans from './page/MyLoans'
import MyBooks from './page/MyBooks'
export default function router() {
  
  

  return (
    <BrowserRouter>
      <div>
       <Routes>
        <Route path="/" element={<Home location />} />
        <Route path="/login" element={<Login />} />
        <Route path="/my_loans" element={<MyLoans />} />
        <Route path="/books/detail" element={<BookDetails />} />
        <Route path="/books/my_books" element={<MyBooks />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}




function NotFound() {
  return (
    <div>
      <h2>404</h2>
    </div>
  );
}

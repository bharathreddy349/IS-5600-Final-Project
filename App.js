import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import Home from "./components/Home";

import BookList from "./components/BookList";
import AddBook from "./components/AddBook";
import EditBook from "./components/EditBook";

import AddBookUser from "./components/AddBookUser";
import BookUserList from "./components/BookUserList";
import EditBookUser from "./components/EditBookUser";

import About from "./components/About";

import '../src/App.css'

function App() {
  return (

<>
  
<div className="header">
  <a href="/" className="logo">Book Registry</a>
  <div className="header-right">
    <a className="active" href="/">Home</a>
       <a href="/about">About</a>
  </div>
</div>



    <BrowserRouter>
      <div className="backgroundimage">
        
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="userlist" element={<UserList />} />
          <Route path="add" element={<AddUser />} />
          <Route path="userlist/edit/:id" element={<EditUser />} />

          <Route path="booklist" element={<BookList />} />
          <Route path="addbook" element={<AddBook />} />
          <Route path="booklist/editbook/:id" element={<EditBook />} />

          <Route path="addbookuser" element={<AddBookUser />} />
          <Route path="bookuserlist" element={<BookUserList />} />
          <Route path="bookuserlist/editbookuser/:id" element={<EditBookUser />} />

          <Route path="/about" element={<About />} />

        </Routes>
      </div>
    </BrowserRouter>
    
   </>
   
  );
}

export default App;

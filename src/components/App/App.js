import React, { useEffect, useState } from 'react'
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import './App.css';
// import Header from "../Header/Header.js";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
// import SavedMovies from "../SavedMovies/SavedMovies";
// import Profile from "../Profile/Profile";
// import Login from "../Login/Login";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Error from "../Error/Error";
import SavedMovies from '../SavedMovies/SavedMovies';


// import NotFoundErr from "../NotFoundErr/NotFoundErr";

 

function App() {
   // стейт статусa пользователя  
   const [loggedIn, setLoggedIn] = React.useState(false);

   const [isBurger, setIisBurger] = useState(false);

  

  return (
    <div className="page">
     <Routes>
     <Route path="/" element={<Main/>} />
      <Route path="/movies" element={<Movies />} />
     <Route path="/saved-movies" element={<SavedMovies />} />
     <Route path="/profile" element={<Profile />} /> 
     <Route path="/signup" element={<Register />} />
     <Route path="/signin" element={<Login />} />
     <Route path="/*" element={<Error />} />
    </Routes>

    </div >

  )
}


export default App;


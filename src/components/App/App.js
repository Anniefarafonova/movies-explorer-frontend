import React, { useEffect, useState } from 'react'
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import { CurrentUserContext } from '../../contexts/CurrentUserContextt/CurrentUserContext.js';
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
import ProtectedRouteElement from "../ProtectedRoute/ProtectedRoute";
import HeaderAuth from '../HeaderAuth/HeaderAuth';
import * as MainApi from "../../utils/MainApi";

// import NotFoundErr from "../NotFoundErr/NotFoundErr";



function App() {
  const navigate = useNavigate();
  // стейт попапов

  // стейт статусa пользователя  
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isDone, setIsDone] = React.useState(false);
  // стейт контекст
  const [currentUser, setCurrentUser] = useState({});
  // стейт name
  const [name, setName] = React.useState('');
  // стейт email
  const [email, setEmail] = React.useState('');


  // //функция регистации
  // function onRegister(name, email, password) {
  //   MainApi
  //     .register(name, email, password)
  //     .then((res) => {
  //       setIsDone(true)
  //       console.log(res);
  //       console.log('ok registr');
  //       navigate('/signin', { replace: true });
  //     })
  //     .catch((error) => {
  //       console.error(`Ошибка при регистрации ${error}`)
  //       console.log('ne ok registr');
  //       setIsDone(false)
  //     })
  // }
  // //функция авторизации
  // function onLogin(email, password) {
  //   MainApi
  //     .authorize(email, password)
  //     .then((res) => {
  //       setLoggedIn(true)
  //       navigate('/movies', { replace: true });

  //       setEmail(email)
  //     })
  //     .catch((error) => {
  //       console.error(`Ошибка при авторизации ${error}`)
  //       console.log('ne ok auth');
  //       setIsDone(false)
  //     })
  // }
  // // //проверка токена
  // useEffect(() => {
  //   getTokenCheck();
  // }, [])

  // const getTokenCheck = (token) => {
  //   if (localStorage.getItem('token')) {
  //     const token = localStorage.getItem('token');
  //     MainApi
  //       .tokenCheck(token)
  //       .then((res) => {
  //         if (res) {
  //           setLoggedIn(true);

  //         }
  //       });
  //   }
  // }


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Routes>
          <Route path="/" element={<Main email={email} />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/*" element={<Error />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="/profile" element={<Profile />} />



          {/* <Route path="/" element={<Main email={email} />} />
          <Route path="/signup" element={<Register onRegister={onRegister} />} />
          <Route path="/signin" element={<Login onLogin={onLogin} />} />
          <Route path="/*" element={<Error />} /> */}
          {/* <Route path="/movies" element={<ProtectedRouteElement element={Movies} loggedIn={loggedIn} />} />
          <Route path="/saved-movies" element={<ProtectedRouteElement element={SavedMovies} loggedIn={loggedIn} />} />
          <Route path="/profile" element={<ProtectedRouteElement element={Profile} loggedIn={loggedIn} name={name} email={email} />} /> */}
        </Routes>
      </div >
    </CurrentUserContext.Provider>
  )
}


export default App;


import React, { useEffect, useState } from 'react'
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import { CurrentUserContext } from '../contexts/CurrentUserContextt/CurrentUserContext.js';
import './App.css';
import Main from "./Main/Main.jsx";
import Movies from "./Movies/Movies.js";
import Register from "./Register/Register.js";
import Login from "./Login/Login.js";
import Profile from "./Profile/Profile.js";
import Error from "./Error/Error.js";
import SavedMovies from './SavedMovies/SavedMovies.js';
import ProtectedRouteElement from "./ProtectedRoute/ProtectedRoute.js";
import MainApi from "../utils/MainApi.js";

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
  // стейт фильмов
  // const [movies, setMovies] = useState([]);
  // стейт загрузки
  const [preloader, setPreloader] = useState(false);

  const [savedMovies, setSavedMovies] = useState([]);

  const [deleteId, setDeleteId] = useState('');

  const [isUpdateCheck, setIsUpdateCheck] = useState(true)
  const [isWarning, setIsWarning] = useState(false);


  useEffect(() => {
    setName(currentUser.name);
  }, [currentUser]);


  //проверка токена
  useEffect(() => {
    getTokenCheck();
  }, [])

  const getTokenCheck = (token) => {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      MainApi
        .getUserInfo(token)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
          }
        });
    }
  }


  //функция авторизации
  function onLogin(email, password) {
    MainApi.authorize(email, password)
      .then((res) => {
        localStorage.setItem('token', res.token)
        setLoggedIn(true)
        navigate('/movies', { replace: true });
        console.log('ok auth');
        setEmail(email)
        // onRegister(name, email)
        setName(name)
      })
      .catch((error) => {
        console.error(`Ошибка при авторизации ${error}`)
        console.log('ne ok auth');
        setIsDone(false)

        setIsWarning(true)
      })
  }


  function onRegister(name, email, password) {
    setPreloader(true)
    MainApi
      .register(name, email, password)
      .then((res) => {
        setEmail(email)
        setName(name)
        if (res) {
          setLoggedIn(false)
          MainApi.authorize(email, password)
            .then(res => {
              localStorage.setItem('token', res.token)
              setLoggedIn(true)
              navigate('/movies')
              setEmail(email)
              setName(name)
            })
            .catch((error) => {
              console.error(`Ошибка при регистрации ${error}`)
              console.log('ne ok registr');
              setIsDone(false)
              setIsWarning(true)
            })
        }
      })
      .catch((error) => {
        console.error(`Ошибка при регистрации ${error}`)
        setIsWarning(true)
      })

  }

  function signOut() {
    localStorage.removeItem('token');
    setLoggedIn(false);
    navigate("/signin");
    localStorage.clear();
  }

  //функция отображения данных Edit(описание)
  function handleUpdateUser(data) {
    MainApi
      .setUserInfo(data, localStorage.token)
      .then((data) => {
        setCurrentUser(data)
      })
      .catch((error) => {
        console.error(`Ошибка отправка формы с юзер данными (аватар) ${error}`)
        setIsWarning(true)

      })
  }
  //Функция удаления
  function handleDeleteSubmit(deleteId) {
    // evt.preventDefault()
    MainApi
      .deleteMovie(deleteId, localStorage.token)
      .then(() => {
        setSavedMovies(savedMovies.filter(movie => {
          return movie._id !== deleteId
        }))

      })
      .catch((error) => console.error(`Ошибка удаления ${error}`));
  }

  //функция добавления карточки
  function handleAddSubmit(data) {
    MainApi
      .addMovie(data, localStorage.token) //делаем запрос на сервер
      .then(res => {
        setSavedMovies([res, ...savedMovies])
        console.log("добавления карточки успешно");
      })
      .catch((error) => console.error(`Ошибка лайка ${error}`));
  }
  //функция Api
  useEffect(() => {
    loggedIn &&
      // if (localStorage.token) {
      Promise.all([MainApi.getUserInfo(localStorage.token), MainApi.getMovie(localStorage.token)])
        .then(([dataUser, dataMovies]) => {
          setCurrentUser(dataUser)
          setSavedMovies(dataMovies);
          setLoggedIn(true);
          setIsUpdateCheck(false)
        })
        .catch((error) => {
          console.error(`Ошибка при начальных данный страницы ${error}`);
          setIsUpdateCheck(false)
          localStorage.clear()
        })
  }, [loggedIn]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        {/* {isUpdateCheck ? <Preloader /> : */}
        <Routes>
          <Route path="/" element={<Main email={email} loggedIn={loggedIn} />} />
          <Route path="/signup" element={<Register onRegister={onRegister} name={name} email={email} loggedIn={loggedIn} isWarning={isWarning} setIsWarning={setIsWarning} />} />
          <Route path="/signin" element={<Login onLogin={onLogin} name={name} email={email} isWarning={isWarning} setIsWarning={setIsWarning} />} />
          <Route path="/*" element={<Error />} />

          <Route path="/movies" element={<ProtectedRouteElement
            element={Movies}
            loggedIn={loggedIn}
            handleAddSubmit={handleAddSubmit}
            handleDeleteSubmit={handleDeleteSubmit}
            savedMovies={savedMovies}
            setSavedMovies={setSavedMovies}

          />}
          />

          <Route path="/saved-movies" element={<ProtectedRouteElement
            element={SavedMovies}
            loggedIn={loggedIn}
            handleAddSubmit={handleAddSubmit}
            handleDeleteSubmit={handleDeleteSubmit}
            savedMovies={savedMovies}
            setSavedMovies={setSavedMovies}
          />}
          />


          <Route path="/profile" element={<ProtectedRouteElement element={Profile} loggedIn={loggedIn} name={name} email={email} signOut={signOut} handleUpdateUser={handleUpdateUser} isWarning={isWarning} setIsWarning={setIsWarning} />} />

        </Routes>
        {/* //  } */}
      </div >
    </CurrentUserContext.Provider>
  )
}


export default App;


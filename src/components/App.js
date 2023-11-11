import React, { useEffect, useState } from 'react'
import { Route, Routes, Link, useNavigate, Navigate } from "react-router-dom";
import { CurrentUserContext } from '../contexts/CurrentUserContextt/CurrentUserContext.js';
import './App.css';
import Main from "./Main/Main.jsx";
import Movies from "./Movies/Movies.js";
import Register from "./Register/Register.js";
import Login from "./Login/Login.js";
import Profile from "./Profile/Profile.js";
import Error from "./Error/Error.js";
import SavedMovies from './SavedMovies/SavedMovies.js';
import MainApi from "../utils/MainApi.js";
import Preloader from './Preloader/Preloader.js';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute.js';



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
  const [isSuccess, setIsSuccess] = useState("");


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
        console.log(email);
        console.log(name);
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
    // localStorage.removeItem('token');
    localStorage.clear()
    setLoggedIn(false)
    navigate('/')
  }

  //функция отображения данных Edit(описание)
  function handleUpdateUser(data) {
    MainApi
      .setUserInfo(data, localStorage.token)
      .then((data) => {
        setCurrentUser(data)
        setIsSuccess("Профиль успешно обновлен.");
        setIsWarning(false)
        setLoggedIn(true);
      })
      .catch((error) => {
        console.error(`Ошибка отправка формы с юзер данными (аватар) ${error}`)
        setIsWarning(true)
        setIsSuccess("")

      })
  }
  //Функция удаления
  function handleDeleteSubmit(deleteId) {

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
    const add = savedMovies.some(element => data.id === element.movieId)
    const seachMovie = savedMovies.find((movie) => {
      return movie.movieId === data.id
    })

    if (add) {
      handleDeleteSubmit(seachMovie._id);

    } else {
      MainApi
        .addMovie(data, localStorage.token)
        .then(res => {
          setSavedMovies([res, ...savedMovies])
          console.log("добавления карточки успешно");
        })
        .catch((error) => console.error(`Ошибка лайка ${error}`));
    }
  }




  useEffect(() => {
    if (localStorage.token) {
      Promise.all([MainApi.getUserInfo(localStorage.token), MainApi.getMovie(localStorage.token)])
        .then(([userData, dataMovies]) => {
          setSavedMovies(dataMovies)
          setCurrentUser(userData)
          setLoggedIn(true)
          // setIsCheckToken(false)
        })
        .catch((err) => {
          console.error(`Ошибка при загрузке начальных данных ${err}`)
          // setIsCheckToken(false)
          localStorage.clear()
        })
    } else {
      setLoggedIn(false)
      // setIsCheckToken(false)
      localStorage.clear()
    }
  }, [loggedIn])



  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Routes>
        <Route path="/" element={<Main email={email} loggedIn={loggedIn} />} />
          {!loggedIn ?
            (<Route path="/signup" element={<Register onRegister={onRegister} name={name} email={email} loggedIn={loggedIn} isWarning={isWarning} setIsWarning={setIsWarning} />} />)
            :
            (<Route path="/" element={<Main email={email} loggedIn={loggedIn} />} />)
          }
          {!loggedIn ?
            (<Route path="/signin" element={<Login onLogin={onLogin} name={name} email={email} isWarning={isWarning} setIsWarning={setIsWarning} />} />)
            :
            (<Route path="/" element={<Main email={email} loggedIn={loggedIn} />} />)
          } 
       {loggedIn ? (<Route path="/movies" element={<ProtectedRoute
            element={Movies}
            loggedIn={loggedIn}
            handleAddSubmit={handleAddSubmit}
            handleDeleteSubmit={handleDeleteSubmit}
            savedMovies={savedMovies}
            setSavedMovies={setSavedMovies}
          />} />) :  (<Route path="/" element={<Main email={email} loggedIn={loggedIn} />} />)
}
       {loggedIn ? (<Route path="/saved-movies" element={<ProtectedRoute
            element={SavedMovies}
            loggedIn={loggedIn}
            handleAddSubmit={handleAddSubmit}
            handleDeleteSubmit={handleDeleteSubmit}
            savedMovies={savedMovies}
            setSavedMovies={setSavedMovies}/>} />) :  (<Route path="/" element={<Main email={email} loggedIn={loggedIn} />} />)
}
      {loggedIn ? (<Route path="/profile" element={<ProtectedRoute 
            element={Profile} loggedIn={loggedIn} name={name} email={email} signOut={signOut} handleUpdateUser={handleUpdateUser} isWarning={isWarning} setIsWarning={setIsWarning} isSuccess={isSuccess} setIsSuccess={setIsSuccess} />} />) : (<Route path="/" element={<Main email={email} loggedIn={loggedIn} />} />)
}
         {!loggedIn ? 
           (<Route path="/" element={<Main email={email} loggedIn={loggedIn} />} />) 
           : 
           ( <Route path="*" element={<Error />}/> )
          }
        </Routes>
      </div >
    </CurrentUserContext.Provider>
  )
}


export default App;


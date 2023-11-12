import React, { useState, useEffect, useContext } from 'react'
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import { Link } from 'react-router-dom';
import './SavedMovies.css';
import HeaderAuth from '../HeaderAuth/HeaderAuth';
import SearchForm from '../SearchForm/SearchForm';

import Footer from '../Footer/Footer';
import { MoviesApi } from '../../utils/MoviesApi';



export default function SavedMovies({ savedMovies, setSavedFilteredMovies, handleAddSubmit, handleDeleteSubmit, setSavedMovies, filtredSavedMovie, searchFilmsSaved }) {
  const [filterMovies, setFilterMovies] = useState(savedMovies)
  const [isSearch, setIsSearch] = useState("");
  const [isCheck, setIsCheck] = useState(false);
  const [firstSearch, setFirstSearch] = useState(true)

  const filtredMovie = ((isSearch, isCheck, savedMovies) => {
    setIsSearch(isSearch)
    setFilterMovies(savedMovies.filter((movie) => {
      const searchName = movie.nameRU.toLowerCase().includes(isSearch.toLowerCase()) ||
        movie.nameEN.toLowerCase().includes(isSearch.toLowerCase());
      return isCheck ? (searchName && movie.duration <= 40) : searchName
    }))
  })

  function searchFilms(search) {
    filtredMovie(isSearch, isCheck, savedMovies)
  }

  useEffect(() => {
    filtredMovie(isSearch, isCheck, savedMovies)
  }, [isSearch, isCheck, savedMovies])


  function changeCheck() {
    if (isCheck) {
      setIsCheck(false)
      setFirstSearch(false)
      filtredMovie(isSearch, false, savedMovies)
    } else {
      setIsCheck(true)
      setFirstSearch(false)
      filtredMovie(isSearch, true, savedMovies)
    }
  }

  return (
    <>
      <HeaderAuth />
      <main className="main">
        <SearchForm
        changeCheck={changeCheck}
          isSearch={isSearch}
          setIsSearch={setIsSearch}
          handleAddSubmit={handleAddSubmit}
          handleDeleteSubmit={handleDeleteSubmit}
          savedMovies={savedMovies}
          setSavedMovies={setSavedMovies}
          searchFilmsSaved={searchFilmsSaved}
          filtredSavedMovie={filtredSavedMovie}
          setSavedFilteredMovies={setSavedFilteredMovies}
          isSaved={true}
          searchFilms={searchFilms}
        />
        < MoviesCardList
          filterMovies={filterMovies}
          handleDeleteSubmit={handleDeleteSubmit}
          handleAddSubmit={handleAddSubmit}
          isSaved={true}
          savedMovies={savedMovies}
          setSavedMovies={setSavedMovies}
        />
      </main>
      <Footer />
    </>
  )
}









// const [filterMovies, setFilterMovies] = useState(savedMovies)
// const [isSearch, setIsSearch] = useState("");
// const [isCheck, setIsCheck] = useState(false);
// const [firstEntrance, setFirstEntrance] = useState(true)


// const filtredMovie = ((isSearch, isCheck, allMovies) => {
//   setIsSearch(isSearch)

//   setFilterMovies(allMovies.filter((movie) => {
//     const searchName = movie.nameRU.toLowerCase().includes(isSearch.toLowerCase()) ||
//       movie.nameEN.toLowerCase().includes(isSearch.toLowerCase());
//     return isCheck ? (searchName && movie.duration <= 40) : searchName
//   }))

// })

// function searchMovies(search) {
//   setFirstEntrance(false)
//   filtredMovie(isSearch, isCheck, savedMovies)
// }

// useEffect(() => {
//   if (savedMovies.length === 0) {
//     setFirstEntrance(true)
//   } else {
//     setFirstEntrance(false)
//   }
//   filtredMovie(isSearch, isCheck, savedMovies)
// }, [savedMovies, isCheck, isSearch])

// function changeShort() {
//   if (isCheck) {
//     setIsCheck(false)
//     setFirstEntrance(false)
//     filtredMovie(isSearch, false, savedMovies)
//   } else {
//     setIsCheck(true)
//     setFirstEntrance(false)
//     filtredMovie(isSearch, true, savedMovies)
//   }
// }




//  // функция для отрисовки фильмов
//  function searchFilms(search, check) {
//   if (savedMovies.length === 0) {
//     // setIsLoading(true)
//     MoviesApi.getMovie()//запрос к API фильмов
//       .then((res) => {
//         // setAllMovies(res);
//         console.log("запрос к API фильмов +");
//         setIsCheck(false)
//         filtredMovie(isSearch, isCheck, res)

//       })
//       .catch((error) => {
//         console.log("запрос к API фильмов -");
//         console.error(`Ошибка при поиске фильмов ${error}`);
//       })
//   }
// };
// return (
//   <>
//     <HeaderAuth />
//     <main className="main">
//       <SearchForm  changeShort={changeShort}  searchMovies={searchMovies} isSearch={isSearch} savedMovies={savedMovies}/>
//       <MoviesCardListSave handleDeleteSubmit={handleDeleteSubmit} savedMovies={savedMovies} filterMovies={filterMovies} />
//     </main>
//     <Footer />
//   </>
// )
// }



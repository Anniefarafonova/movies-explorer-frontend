import React, { useState, useEffect, useContext, useCallback } from 'react'
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './Movies.css';
import HeaderAuth from '../HeaderAuth/HeaderAuth';
import Footer from '../Footer/Footer';
import MoviesApi from "../../utils/MoviesApi";

export default function Movies({
  savedMovies,
  handleAddSubmit
}) {
  const [allMovies, setAllMovies] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]);
  const [isSearch, setIsSearch] = useState("");
  const [isCheck, setIsCheck] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const [firstSearch, setFirstSearch] = useState(true)
  const [loadingError, setLoadingError] = useState(false)

  const filtredMovie = ((search, isCheck, allmovies) => {
    setIsSearch(search)
    localStorage.setItem('search', JSON.stringify(search))
    localStorage.setItem('check', JSON.stringify(isCheck))
    localStorage.setItem('allmovies', JSON.stringify(allmovies))
    setFilterMovies(allmovies.filter((movie) => {

      const searchName = movie.nameRU.toLowerCase().includes(search.toLowerCase()) ||
        movie.nameEN.toLowerCase().includes(search.toLowerCase());
      return isCheck ? (searchName && movie.duration <= 40) : searchName
    }))
  })

  // функция для отрисовки фильмов
  function searchFilms(search) {
    if (allMovies.length === 0) {
      setIsLoading(true)
      MoviesApi.getMovie()//запрос к API фильмов
        .then((res) => {
          setAllMovies(res);
          console.log("запрос к API фильмов +");
          setIsCheck(false)
          setFirstSearch(false)
          setLoadingError(false)
          filtredMovie(search, isCheck, res)
        })
        .catch((error) => {
          console.log("запрос к API фильмов -");
          console.error(`Ошибка при поиске фильмов ${error}`);
          setLoadingError(true)
        })
    }
    filtredMovie(isSearch, isCheck, allMovies)
  };

  useEffect(() => {

    if (localStorage.allmovies && localStorage.search && localStorage.check) {
      const allmovies = JSON.parse(localStorage.getItem("allmovies"));
      const search = JSON.parse(localStorage.getItem("search"));
      const isCheck = JSON.parse(localStorage.getItem("check"));
      setFirstSearch(false)
      setLoadingError(false)
      setIsSearch(search)
      setIsCheck(isCheck)
      setAllMovies(allmovies)
      filtredMovie(search, isCheck, allmovies)
    }
  }, []);


  function changeCheck() {
    if (isCheck ) {
      setIsCheck(false)
      filtredMovie(isSearch, false, allMovies)
      localStorage.getItem('check', JSON.stringify(false))
      console.log("2");
    } else {
      setIsCheck(true)
      filtredMovie(isSearch, true, allMovies)
      // localStorage.getItem('check', JSON.stringify(true))

      console.log("2");
    }
  }


  return (
    <>
      <HeaderAuth />
      <main className="main">
        <SearchForm
          searchFilms={searchFilms} allMovies={allMovies} setAllMovies={setAllMovies} filterMovies={filterMovies} setFilterMovies={setFilterMovies} isCheck={isCheck} isSearch={isSearch}
          changeCheck={changeCheck}
          setIsSearch={setIsSearch} filtredMovie={filtredMovie} setIsCheck={setIsCheck} savedMovies={savedMovies} isLoading={isLoading} isSaved={false}
        />
        <MoviesCardList
          allMovies={allMovies} isSaved={false} filterMovies={filterMovies} savedMovies={savedMovies} handleAddSubmit={handleAddSubmit} loadingError={loadingError}
        />
      </main>
      <Footer />
    </>
  )
}



// -- Обновление состояний при первом рендере
// useEffect(() => {
//   filtredMovie(isSearch, isCheck, allMovies)





// функция для фильтрации фильмов
// const filtredMovie = allMovies.filter(movie => {
//   return movie.nameRU.toLowerCase().includes(isSearch.toLowerCase()) ||
//     movie.nameEN.toLowerCase().includes(isSearch.toLowerCase());

// setFilteredMovies(movies.filter((movie) => {
//   const searchName = movie.nameRU.toLowerCase().includes(search.toLowerCase())
//   return isCheck ? (searchName && movie.duration <= 40) : searchName
// }))
// })


// const filtredMovie = useCallback((isSearch, allMovies) => {
//   setIsSearch(isSearch)
//   // localStorage.setItem('movie', JSON.stringify(search))
//   // localStorage.setItem('shorts', JSON.stringify(isCheck))
//   // localStorage.setItem('allmovies', JSON.stringify(movies))

//   setFilterMovies(allMovies.filter((movie) => {
//     return movie.nameRU.toLowerCase().includes(isSearch.toLowerCase()) ||
//       movie.nameEN.toLowerCase().includes(isSearch.toLowerCase());
//   }))

// }, [])









// // функция для отрисовки фильмов
// function searchFilms(search) {
//   if (setAllMovies.length === 0) {
//     MoviesApi.getMovie()//запрос к API фильмов
//       .then((data) => {
//         setAllMovies(data);
//         setIsCheck(false)
//         // filter(search, isCheck, res);
//       })
//       .catch((error) => {

//         console.error(`Ошибка при поиске фильмов ${error}`);
//       })
//   }
// };


// const filter = useCallback((search, isCheck, movies) => {
//   localStorage.setItem("movie", JSON.stringify(search));
//   localStorage.setItem("shorts", JSON.stringify(isCheck));
//   localStorage.setItem("allmovies", JSON.stringify(movies));

//   setIsSearch(search);

//   setFilterMovies(
//     movies.filter((movie) => {
//       const searchName =
//         movie.nameRU.toLowerCase().includes(search.toLowerCase()) ||
//         movie.nameEN.toLowerCase().includes(search.toLowerCase());

//       return isCheck
//         ? searchName && movie.duration <= 40
//         : searchName;
//     })
//   );
// }, []);

// useEffect(() => {
//   if (localStorage.allmovies && localStorage.shorts && localStorage.movie) {
//     const movies = JSON.parse(localStorage.allmovies);
//     const search = JSON.parse(localStorage.movie);
//     const isCheck = JSON.parse(localStorage.shorts);
//     setIsSearch(search);
//     setIsCheck(isCheck);
//     setAllMovies(movies);
//     filter(search, isCheck, movies);

//   }
// }, [filter]);
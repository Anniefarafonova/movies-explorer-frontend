import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './SearchForm.css';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

export default function SearchForm({ searchFilms, allMovies, setAllMovies, isCheck, setIsCheck, setIsSearch, isSearch, filtredMovie, setFilterMovies, filterMovies, savedMovies, changeCheck }) {
  const [errors, setErrors] = useState("");

  function handleSubmitSearch(evt) {
    setIsSearch(evt.target.value)
  }

  const handelCheckbox = () => {
    setIsCheck(!isCheck);

  }

  // функция события (нажатие на кнопку "поиск") для поиска фильмов
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (isSearch.length < 1 ) {
      setErrors("Нужно ввести ключевое слово");
      console.log("ne ok");
      return
    } else {
      searchFilms(isSearch);
      console.log(isSearch);
      setErrors("");

    }
  }


  return (
    <>
      <section className="searchForm">
        <form className="searchForm__form" name="form-search" onSubmit={handleSubmit} noValidate="">
          <div className="searchForm__form-items">
            <label className="searchForm__form-search">
              <input className="searchForm__form-input" id="search" type="text" placeholder="Фильм" name="search"
                value={isSearch || ""}
                // value={values.search || ""}
                onChange={handleSubmitSearch
                }

              />
            </label>
            <button
              type="submit"
              aria-label="Найти"
              className="searchForm__form-button"

            >
              Найти
            </button>
            {/* </label> */}
          </div>
          <span className={`register__error ${errors ? 'register__error_active' : ''}`}>{errors}
          </span>


          <div className="searchForm__form-checkbox">
            <FilterCheckbox isCheck={isCheck} setIsCheck={setIsCheck} allMovies={allMovies} filtredMovie={filtredMovie} handelCheckbox={handelCheckbox} setFilterMovies={setFilterMovies} changeCheck={changeCheck} />
          </div>
        </form>
      </section>

    </>
  )
}





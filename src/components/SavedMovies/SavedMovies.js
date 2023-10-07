import React, { useState, useEffect, useContext } from 'react'
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import { Link } from 'react-router-dom';
import './SavedMovies.css';
import HeaderAuth from '../HeaderAuth/HeaderAuth';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardListSave from '../MoviesCardListSave/MoviesCardListSave';



export default function SavedMovies() {
  return (
    <>
      <section className="movies">
        <HeaderAuth/>
        <SearchForm/>
        < FilterCheckbox />
        <MoviesCardListSave />
      </section>
    </>
  )
}
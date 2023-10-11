import React, { useState, useEffect, useContext } from 'react'
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
// import Header from '../Header/Header';
// import Preloader from '../Preloader/Preloader';
// import MoviesCardList from '../MoviesCardList/MoviesCardList';
// import MoviesCard from '../MoviesCard/MoviesCard';
import { Link } from 'react-router-dom';
import './Movies.css';
import Header from '../Header/Header';
import MoviesCard from '../MoviesCard/MoviesCard';
import HeaderAuth from '../HeaderAuth/HeaderAuth';
import Footer from '../Footer/Footer';




export default function Movies({ onBurger, isOpen }) {
  return (
    <>

      <HeaderAuth />
      <main className="main">
        <SearchForm />
        {/* <Preloader /> */}
        <MoviesCardList />
      </main>
      <Footer />
    </>
  )
}
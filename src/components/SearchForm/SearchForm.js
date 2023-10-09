import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useNavigate } from 'react-router-dom';
import imageLogo from '../../images/logo.svg'
import './SearchForm.css';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";


export default function SearchForm({ onRegister }) {

  return (
    <>
      <section className="searchForm">
        <form className="searchForm__form" name="form-search" noValidate="">
  
        <label className="searchForm__form-search">
          <input
            type="text"
            placeholder="Фильм"
            name="Фильм"
            className="searchForm__form-input"
            required=""
          />
          <button
            type="submit"
            aria-label="Найти"
            className="searchForm__saved-button"
          >
            Найти
          </button>
       </label>
          <div className="searchForm__checkbox">
          <FilterCheckbox/>
          </div>
        </form>
      </section>

    </>
  )
}





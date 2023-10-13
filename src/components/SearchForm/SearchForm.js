import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useNavigate } from 'react-router-dom';
import imageLogo from '../../images/logo.svg'
import './SearchForm.css';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";


export default function SearchForm({ }) {

  function handleSubmit(e) {
    e.preventDefault();
    console.log('req');
  };


  return (
    <>
      <section className="searchForm">
        <form className="searchForm__form" name="form-search" noValidate="" onSubmit={handleSubmit}>
          <div className="searchForm__form-items">
            <label className="searchForm__form-search">
              <input
                type="text"
                placeholder="Фильм"
                name="Фильм"
                className="searchForm__form-input"
                required
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
          <div className="searchForm__form-checkbox">
            <FilterCheckbox />
          </div>
        </form>
      </section>

    </>
  )
}





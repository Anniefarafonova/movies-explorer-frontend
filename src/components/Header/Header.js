import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import imageLogo from '../../images/logo.svg'
import icon from '../../images/icon.png'
import './Header.css';

export default function Header({ children }) {
  return (
    //не зарегистрирован

    <header className="header header_main ">
      <Link to="/" rel=''>
        <img className="header__logo" src={imageLogo} alt="Логотип" />
      </Link>
      <nav className="header__list">
        <Link to="/signup" className="header__list-link header__list-link_registr" rel=''>Регистрация</Link>
        <Link to="/signin" className="header__list-link header__list-link_logn" rel=''>Войти</Link>
      </nav>


    </header >
  )
}
import React from 'react'
import { Route, Routes, Link, useNavigate, useLocation } from "react-router-dom";
import imageLogo from '../../images/logo.svg'
import icon from '../../images/icon.png'
import './HeaderAuth.css';

export default function HeaderAuth({ }) {
    const location = useLocation();
    return (
        <header className={`header  header_burger ${location.pathname === '/' ? 'header_dark' : 'header_light'}`}>
            <Link to="/">
                <img className="header__logo" src={imageLogo} alt="Логотип" />
            </Link>
            <ul className="header__links">
                <li className="header__container-links">
                    <Link to="/movies" className={`header__link ${location.pathname === '/' ? 'header__link_dark' : ''}`} >Фильмы</Link>
                </li>
                <li className="header__container-links">

                    <Link to="/saved-movies" className={`header__link ${location.pathname === '/' ? 'header__link_dark' : ''}`} >
                        Сохранённые фильмы</Link>
                </li>
            </ul>
            <div className={`header__flag ${location.pathname === '/' ? 'header__flag_dark' : ''}`} >
                <Link to="/profile" className="header__flag-list">
                    <h4 className="header__flag-title">Аккаунт</h4>
                </Link>
                <div className="header__flag-circle">
                    <img src={icon} alt="иконка" />
                </div>
            </div>
            < div className="header_burger ">
                <div className="hamburger__menu">
                    <input
                        className={`menu__toggle ${location.pathname === '/' ? 'menu__toggle_light' : ''}`}
                        id="menu__toggle"
                        type="checkbox" name='thing' />

                    <ul className="menu__box">
                        <li className='menu__items'>
                            <Link to="/" className="menu__item">Главная</Link>
                        </li>
                        <li className='menu__items'>
                            <Link to="/movies" className="menu__item">Фильмы</Link>
                        </li>
                        <li className='menu__items'>
                            <Link to="/saved-movies" className="menu__item">Сохранённые фильмы</Link>
                        </li>
                        <Link to="/profile">
                            <div className="hamburger__acaunt"></div>
                        </Link>
                    </ul>
                </div>
            </div>
        </header >
    )
}
import React from 'react'
import { Route, Routes, Link, useNavigate, useLocation } from "react-router-dom";
import imageLogo from '../../images/logo.svg'
import icon from '../../images/icon.png'
import './HeaderAuth.css';
import Burger from '../Burger/Burger';

export default function HeaderAuth({ onBurger, isOpen }) {
    const location = useLocation();
    return (
        <>
            <header className={`header header_burger ${location.pathname === '/' ? 'header_dark' : 'header_light'}`} >
                <Link to="/" rel=''>
                    <img className="header__logo" src={imageLogo} alt="Логотип" />
                </Link>
                <ul className="header__container">
                    <li className="header__container-links">
                        <Link to="/movies" className={`header__container-link ${location.pathname === '/' ? 'header__container-link_dark' : ''}`} rel=''>Фильмы</Link>
                    </li>
                    <li className="header__container-links">

                        <Link to="/saved-movies" className={`header__container-link ${location.pathname === '/' ? 'header__container-link_dark' : ''}`} rel='' >
                            Сохранённые фильмы</Link>
                    </li>
                </ul>
                <div className={`header__flag ${location.pathname === '/' ? 'header__flag_dark' : ''}`} >
                    <Link to="/profile" className="header__flag-list" rel=''>
                        <h4 className="header__flag-title">Аккаунт</h4>
                    </Link>
                    <div className="header__flag-circle">
                        <img src={icon} alt="иконка" />
                    </div>
                </div>
                <section className="header_burger">
                    <Burger />
                </section>
            </header >

        </>
    )
}
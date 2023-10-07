import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useNavigate } from 'react-router-dom';
import imageLogo from '../../images/logo.svg'
import './HeaderBurger.css';

export default function HeaderBurger({ isOpen }) {

    return (
        <>
            {/* <section className="burger">


        </section> */}
            <header className="header header_burger">
                <img className="header__logo" src={imageLogo} alt="Логотип" />
                <div className="header__list-links">

                    <div className="hamburger-menu">
                        <input className="menu__toggle" id="menu__toggle"
                            type="checkbox" name='thing' />
                        <ul className="menu__box">
                            <li>
                                <Link to="/" className="menu__item">Главная</Link>
                            </li>
                            <li>
                                <Link to="/movies" className="menu__item">Фильмы</Link>
                            </li> <li>
                                <Link to="/saved-movies" className="menu__item">Сохранённые фильмы</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header >
        </>
    )
}




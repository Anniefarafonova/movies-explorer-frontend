import React from 'react'
import { Route, Routes, Link, useNavigate, useLocation } from "react-router-dom";
import './Burger.css';

export default function Burger({ }) {
    const location = useLocation();
    return (
        <>
            <div className="header__menu" >
                <input
                    className={`header__menu-toggle ${location.pathname === '/' ? 'header__menu-toggle_light' : ''}`}
                    id="header__menu-toggle"
                    type="checkbox" name='thing' />
                <div className="header__menu-container">
                    <ul className="header__box">
                        <li className='header__box-items'>
                            <Link to="/" className="header__box-item" rel=''>Главная</Link>
                        </li>
                        <li className='header__box-items'>
                            <Link to="/movies" className="header__box-item" rel=''>Фильмы</Link>
                        </li>
                        <li className='header__box-items'>
                            <Link to="/saved-movies" className="header__box-item" rel=''>Сохранённые фильмы</Link>
                        </li>
                        <li className="header__box-acaunts" >
                            <Link to="/profile" rel='' className="header__box-acaunt" >
                                {/* <div className="header__box-acaunt"></div> */}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import imageLogo from '../../images/logo.svg'
import icon from '../../images/icon.png'
import './HeaderAuth.css';

export default function HeaderAuth({ }) {

    return (
        <header className="header header_light header_dark">
            <img className="header__logo" src={imageLogo} alt="Логотип" />
            <ul className="header__links">
                <li className="header__container-links">
                    <Link to="/movies" className="header__link header__link_dark">Фильмы</Link>
                </li>
                <li className="header__container-links">
                    <Link to="/saved-movies" className="header__link header__link_dark">Сохранённые фильмы</Link>
                </li>
            </ul>
            <div className="header__flag header__flag_dark">
                <h4 className="header__flag-title">Аккаунт</h4>
                <div className="header__flag-circle">
                    <img src={icon} alt="иконка" />
                </div>
            </div>
            < div className="header_burger">
                <div className="hamburger-menu">
                    <input className="menu__toggle" id="menu__toggle"
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

                        <div className="hamburger__acaunt"></div>
                    </ul>

                </div>

            </div>
        </header >
    )
}
import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useNavigate } from 'react-router-dom';
import imageLogo from '../../images/logo.svg'
import './Login.css';


export default function Login({ onRegister }) {

    return (
        <>
            <main className="main">
                <section className="login">
                    <div className="login__container">
                        <Link to="/">
                            <img className="login__container-logo" src={imageLogo} alt="Логотип" />
                        </Link>
                        <form className="form form_login" name="form-login" noValidate>
                            <h1 className="form__container-title form__container-title_login">Рады видеть!</h1>
                            <div className="form__container-texts form__container-texts_login" >
                                <label className="form__item-span">E-mail</label>
                                <input id="email" type="email" placeholder=" " name="email"
                                    className="form__item form__item_login  form__item_login-email" required />
                                <label className="form__item-span">Пароль</label>
                                <input id="password" type="password" placeholder="" name="password"
                                    className="form__item form__item_login form__item_login-password" requiredvalue />
                            </div>
                            <button type="submit" aria-label="Зарегистрироваться" className="login__saved-button">Войти</button>
                        </form>

                        <p className="login__subtitle">
                            Ещё не зарегистрированы?
                            <Link to="/signup" className="login__subtitle-link">Регистрация</Link>
                        </p>
                    </div>
                </section>
            </main>
        </>
    )
}
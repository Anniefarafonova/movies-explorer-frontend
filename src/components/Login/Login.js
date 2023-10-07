import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useNavigate } from 'react-router-dom';
import imageLogo from '../../images/logo.svg'
import './Login.css';


export default function Login({ onRegister }) {

    return (
        <>
            <section className="login">
                <div className="login__container">
                    <img className="login__container-logo" src={imageLogo} alt="Логотип" />
                    <form className="form form_login" name="form-login" noValidate>
                        <h2 className="form__container-title form__container-title_login">Рады видеть!</h2>
                        <div className="form__container-texts form__container-texts_login" >
                            <span className="form__item-span">E-mail</span>
                            <input id="email" type="email" placeholder=" " name="email"
                                className="form__item form__item_login  form__item_login-email" required />
                            <span className="form__item-span">Пароль</span>
                            <input id="password" type="password" placeholder="" name="password"
                                className="form__item form__item_login form__item_login-password" requiredvalue />
                        </div>
                        <button type="submit" aria-label="Зарегистрироваться" className="login__saved-button">Войти</button>
                    </form>

                    <p className="login__subtitle">
                        Ещё не зарегистрированы?
                        <Link to="/signin" className="login__subtitle-link">Регистрация</Link>
                    </p>
                </div>
            </section>
        </>
    )
}
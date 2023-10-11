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
                        <Link to="/" rel=''>
                            <img className="login__container-logo" src={imageLogo} alt="Логотип" />
                        </Link>
                        <form className="form form_login" name="form-login" noValidate>
                            <h1 className="form__title form__title_login">Рады видеть!</h1>
                            <div className="form__container form__container_login" >
                                <label className="form__container-span">E-mail</label>
                                <input id="email" type="email" placeholder="введите E--mail" name="email"
                                    className="form__container-item form__container-item_login form__container-item__login-email" required />
                                <label className="form__container-span">Пароль</label>
                                <input id="password" type="password" placeholder="введите пароль" name="password"
                                    className="form__container-item form__container-item_login form__container-item__login-password" required />
                            </div>
                            <button type="submit" aria-label="Зарегистрироваться" className="form__button-login">Войти</button>
                        </form>

                        <p className="login__container-subtitle">
                            Ещё не зарегистрированы?
                            <Link to="/signup" className="login__container-link" rel=''>Регистрация</Link>
                        </p>
                    </div>
                </section>
            </main>
        </>
    )
}
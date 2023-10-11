import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useNavigate } from 'react-router-dom';
import imageLogo from '../../images/logo.svg'
import './Register.css';


export default function Register({ onRegister }) {

    return (
        <>
            <main className="main">
                <section className="register">
                    <div className="register__container">
                        <Link to="/">
                            <img className="register__container-logo" src={imageLogo} alt="Логотип" />
                        </Link>
                        <form className="form form_login" name="form-login" noValidate>
                            <h1 className="form__title form__title_login">Добро пожаловать!</h1>
                            <div className="form__container form__container_login" >
                                <label className="form__container-span">Имя</label>
                                <input id="name" type="text" placeholder="" name="name"
                                    className="form__container-item form__container-item_register form__container-item__login-name" required />
                                <label className="form__container-span">E-mail</label>
                                <input id="email" type="email" placeholder=" " name="email"
                                    className="form__container-item form__container-item_register form__container-item__login-email" required />
                                <label className="form__container-span">Пароль</label>
                                <input id="password" type="password" placeholder="" name="password"
                                    className="form__container-item form__container-item_register form__container-item__login-password" required />
                            </div>
                            <button type="submit" aria-label="Зарегистрироваться" className="form__button-register" >Зарегистрироваться</button>
                        </form>

                        <p className="register__container-subtitle  register__subtitle">
                            Уже зарегистрированы?
                            <Link to="/signin" className="register__container-link">Войти</Link>
                        </p>
                    </div>
                </section>
            </main>
        </>
    )
}


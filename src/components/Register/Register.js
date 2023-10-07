import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useNavigate } from 'react-router-dom';
import imageLogo from '../../images/logo.svg'
import './Register.css';


export default function Register({ onRegister }) {

    return (
        <>
            <section className="register">
                <div className="register__container">
                    <img className="register__container-logo" src={imageLogo} alt="Логотип" />
                    <form className="form form_login" name="form-login" noValidate>
                        <h2 className="form__container-title form__container-title_login">Добро пожаловать!</h2>
                        <div className="form__container-texts form__container-texts_login" >
                            <span className="form__item-span">Имя</span>
                            <input id="name" type="text" placeholder="" name="name"
                                className="form__item form__item_register form__item_login-name" required />
                            <span className="form__item-span">E-mail</span>
                            <input id="email" type="email" placeholder=" " name="email"
                                className="form__item form__item_register form__item_login-email" required />
                            <span className="form__item-span">Пароль</span>
                            <input id="password" type="password" placeholder="" name="password"
                                className="form__item form__item_register form__item_login-password" requiredvalue />
                        </div>
                        <button type="submit" aria-label="Зарегистрироваться" className="register__saved-button" >Зарегистрироваться</button>
                    </form>

                    <p className="register__subtitle">
                        Уже зарегистрированы?
                        <Link to="/signin" className="register__subtitle-link">Войти</Link>
                    </p>
                </div>
            </section>
        </>
    )
}


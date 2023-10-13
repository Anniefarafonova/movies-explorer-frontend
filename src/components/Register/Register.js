import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useNavigate } from 'react-router-dom';
import imageLogo from '../../images/logo.svg'
import './Register.css';


export default function Register({ onRegister }) {
    const initialValuesRegister = {
        name: '',
        email: '',
        password: '',
    };
    const [valuesRegister, setValuesRegister] = useState(initialValuesRegister);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValuesRegister({
            ...valuesRegister,
            [name]: value
        });
    }
    function handleSubmit(e) {
        e.preventDefault();
        onRegister(valuesRegister)
        reset(e)
    }
    function reset(e) {
        setValuesRegister(initialValuesRegister)
    }
    return (
        <>
            <main className="main">
                <section className="register">
                    <div className="register__container">
                        <Link to="/" rel=''>
                            <img className="register__container-logo" src={imageLogo} alt="Логотип" />
                        </Link>
                        <form className="form form_login" name="form-login" onSubmit={handleSubmit} noValidate>
                            <h1 className="form__title form__title_login">Добро пожаловать!</h1>
                            <div className="form__container form__container_login" >
                                <label className="form__container-span">Имя</label>
                                <input id="name" type="text" placeholder="" name="name"
                                    className="form__container-item form__container-item_register" onChange={handleChange}  value={valuesRegister.name}  required />
                                <label className="form__container-span">E-mail</label>
                                <input id="email" type="email" placeholder=" " name="email"
                                    className="form__container-item form__container-item_register" onChange={handleChange}  value={valuesRegister.email}  required />
                                <label className="form__container-span">Пароль</label>
                                <input id="password" type="password" placeholder="" name="password"
                                    className="form__container-item form__container-item_register" onChange={handleChange} value={valuesRegister.password} required />
                            </div>
                            <button type="submit" aria-label="Зарегистрироваться" className="form__button-register" >Зарегистрироваться</button>
                        </form>

                        <p className="register__container-subtitle  register__subtitle">
                            Уже зарегистрированы?
                            <Link to="/signin" className="register__container-link" rel=''>Войти</Link>
                        </p>
                    </div>
                </section>
            </main>
        </>
    )
}


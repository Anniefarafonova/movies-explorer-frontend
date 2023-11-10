// Пользователь с таким email уже существует
import React, { useState, useEffect, useContext, useRef, useCallback } from "react";
import { Link, useNavigate } from 'react-router-dom';
import imageLogo from '../../images/logo.svg'
import './Register.css';
// import App from "../App/App";


export default function Register({ onRegister, isWarning, setIsWarning }) {
    const [inputValues, setInputValues] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);
    const validateForm = () => {
        const errors = {};
     
        if (inputValues.name.length == 0) {
            errors.name = ''
        } else if (inputValues.name.length < 2) {
            errors.name = 'Имя должно содержать от 2 до 30 символов.'
        }

        if (!inputValues.email) {
            errors.email = '';
        } else if (!/^\S+@\S+\.\S+$/.test(inputValues.email)) {
            errors.email = 'Некорректный email';
        }

        if (inputValues.password.length == 0) {
            errors.password = ''
        } else if (inputValues.password.length < 5) {
            errors.password = 'неправильный пароль'

        }

        setErrors(errors);
        return errors;
    };
    function validateButton() {

        if ((inputValues.name.length == 0) || (inputValues.name.length < 2)) {
            setIsValid(true)
            return
        } else {
            setIsValid(false)
        }
        if ((!inputValues.email) || (!/^\S+@\S+\.\S+$/.test(inputValues.email))) {
            setIsValid(true)
            return
        } else {
            setIsValid(false)
        }
        if ((inputValues.password.length == 0) || (inputValues.password.length < 5)) {
            setIsValid(true)
            return
        } else {
            setIsValid(false)
        }
    }
    const inputOnChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        setInputValues({ ...inputValues, [name]: value });

    };
    useEffect(() => {
        validateForm()
        validateButton()
    }, [inputValues]);

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsValid(validateForm())
        setErrors(validateForm());
        setIsWarning(false)
        onRegister(inputValues.name, inputValues.email, inputValues.password)
    };

    return (
        <>
            <main className="main">
                <section className="register">
                    <div className="register__container">
                        <Link to="/" rel=''>
                            <img className="register__container-logo" src={imageLogo} alt="Логотип" />
                        </Link>
                        <form className="form form_login" name="form-login" noValidate
                            onSubmit={handleSubmit}
                        >
                            <h1 className="form__title form__title_login">Добро пожаловать!</h1>
                            <div className="form__container form__container_login" >
                                <label className="form__container-span">Имя</label>
                                <input id="name" type="text" placeholder="Введите Ваше имя" name="name"
                                    className={`form__container-item form__container-item_register ${errors.name ? 'form__container-item_register-none' : ' '}`}
                                    minLength="2"
                                    maxLength="30"
                                    value={inputValues.name || ""}
                                    onChange={inputOnChange}
                                    required
                                />
                                <span className={`register__error ${errors.name ? 'register__error_active' : ''}`}>{errors.name}</span>

                                {/* <span className={`register__error ${errors.name ? 'register__error_active' : ''}`}>{errors.name}
                                </span> */}
                                <label className="form__container-span">E-mail</label>
                                <input id="email" type="email" placeholder="Введите email" name="email"
                                    className={`form__container-item form__container-item_register ${errors.email ? 'form__container-item_register-none' : ' '}`}
                                    value={inputValues.email || ""}
                                    onChange={inputOnChange}
                                    required
                                />

                                <span className={`register__error ${errors.email ? 'register__error_active' : ''}`}>{errors.email}</span>
                                {/* <span className={`register__error ${errors.email ? 'register__error_active' : ''}`}>{errors.email} */}
                                {/* </span> */}

                                <label className="form__container-span">Пароль</label>
                                <input id="password" type="password" placeholder="Введите пароль" name="password"
                                    className={`form__container-item form__container-item_register ${errors.password ? 'form__container-item_register-none' : ' '}`}
                                    minLength="5"
                                    maxLength="30"
                                    value={inputValues.password || ""}
                                    onChange={inputOnChange}
                                    required
                                />
                                <span className={`register__error ${errors.password ? 'register__error_active' : ''}`}>{errors.password}</span>
                            </div>

                            <span className={`login__errors ${!isWarning ? '' : 'login__errors_active'}`}>
                                {"При регистрации пользователя произошла ошибка." || "Пользователь с таким email уже существует."}
                            </span>

                            <button type="submit" aria-label="Зарегистрироваться"

                                className={`form__button-register ${isValid ? "form__button-register_disabled" : ''}`}
                                disabled={isValid}

                            > Зарегистрироваться</button>


                        </form>

                        <p className="register__container-subtitle  register__subtitle">
                            Уже зарегистрированы?
                            <Link to="/signin" className="register__container-link" rel=''>Войти</Link>
                        </p>
                    </div>
                </section>
            </main >
        </>
    )
}


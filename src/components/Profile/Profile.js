import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './Profile.css';
import HeaderAuth from '../HeaderAuth/HeaderAuth';
// import * as MainApi from "../../utils/MainApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContextt/CurrentUserContext.js"

import MainApi from "../../utils/MainApi";

export default function Profile({ signOut, handleUpdateUser, isWarning, setIsWarning }) {
    const currentUser = useContext(CurrentUserContext);
    const [name, setName] = useState(currentUser.name);
    const [email, setEmail] = useState(currentUser.email);
    const [errors, setErrors] = useState(false);
    const [errorName, setErrorName] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [isValid, setIsValid] = useState(true);
    // const [isWarning, setIsWarning] = useState(false);


    const validateForm = () => {
        if (name.length < 2) {
            setErrorName('Имя должно содержать от 2 до 30 символов.')
        } else {
            setErrorName('')
        }

        if (!/^\S+@\S+\.\S+$/.test(email)) {
            setErrorEmail('Некорректный email')
            setErrors(true)
        } else {
            setErrorEmail('')
        }

        if ((name.length < 2) || (!/^\S+@\S+\.\S+$/.test(email))) {
            setIsValid(true)
            setErrors(true)
            // setIsWarning("ssss")

        } else {
            setIsValid(false)

            // setIsWarning("Неправильные почта или пароль." || "При регистрации пользователя произошла ошибка.")
        }
    };

    function handleNameChange(evt) {
        const target = evt.target;
        const value = target.value;
        setName(value);
        validateForm()
    }

    function handleEmailChange(evt) {
        const target = evt.target;
        const value = target.value;
        setEmail(value);
        validateForm()
    }


    const handleSubmit = (evt) => {
        evt.preventDefault();
        validateForm()
     
        setIsWarning(false)
        handleUpdateUser({ name, email })
        console.log("handleSubmit");
    };


    useEffect(() => {
        validateForm()
    }, [name, email]);


    return (
        <>
            <HeaderAuth />
            <main className="main">
                <section className="profile">
                    <div className="profile__container">
                        <form className="form form_profile" name="form-profile" noValidate onSubmit={handleSubmit}>
                            <h2 className="form__title form__title_profile">{`Привет, ${currentUser.name}!`}</h2>
                            <div className="form__container form__container_profile">
                                <div className="form__container-name" >
                                    <label className="form__container-span form__container-span_profile">Имя</label>
                                    <div className="form__container-names" >
                                        <input id="name" type="text" placeholder="" name="name"
                                            className="form__container-item form__container-item_profile form__container-item_profile_name"

                                            value={name || ''}
                                            onChange={handleNameChange}
                                            required />
                                    </div>
                                </div>
                                <span className={`register__error ${errorName ? 'register__error_active' : ''}`}>{errorName}
                                </span>
                                <div className="form__container-name" >
                                    <label className="form__container-span form__container-span_profile">E-mail</label>
                                    <div className="form__container-names" >
                                        <input id="email" type="email" placeholder=" " name="email"
                                            className="form__container-item form__container-item_profile form__container-item_profile_email" value={email || ''}
                                            onChange={handleEmailChange}
                                            required />
                                    </div>
                                </div>
                                <span className={`register__error ${errorEmail ? 'register__error_active' : ''}`}>{errorEmail}
                                </span>


                            </div>


                            <span className={`profile__errors ${!isWarning ? '' : 'profile__errors_active'}`}>
                                {"При обновлении профиля произошла ошибка.." || "Пользователь с таким email уже существует.."}
                            </span>

                            <button type="submit" aria-label="Редактировать"
                                className={`form__button-profile form__button-profile_edit ${isValid ? "form__button-profile_disabled" : ''}`}
                                disabled={isValid}

                            >Редактировать</button>
                            <Link to="/signin" className="profile__button-link" rel='' onClick={signOut} > Выйти из аккаунта</Link>

                        </form>

                    </div>
                </section>
            </main>
        </>
    )
}
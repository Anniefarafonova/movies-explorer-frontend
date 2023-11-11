import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './Profile.css';
import HeaderAuth from '../HeaderAuth/HeaderAuth';
import { CurrentUserContext } from "../../contexts/CurrentUserContextt/CurrentUserContext.js"

import MainApi from "../../utils/MainApi";

export default function Profile({ signOut, handleUpdateUser, isWarning, setIsWarning, setIsSuccess, isSuccess }) {
    const currentUser = useContext(CurrentUserContext);
    const [name, setName] = useState(currentUser.name);
    const [email, setEmail] = useState(currentUser.email);
    const [values, setValues] = useState({})
    const [errors, setErrors] = useState(false);
    const [errorName, setErrorName] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [isValid, setIsValid] = useState(false);
    console.log(name);
    console.log(email);
    const validateForm = () => {
        console.log(name);
        if (name.length < 2) {
            setErrorName('Имя должно содержать от 2 до 30 символов.')
        } else {
            setErrorName('')
            setIsSuccess(true)
        }

        if (!/^\S+@\S+\.\S+$/.test(email)) {
            setErrorEmail('Некорректный email')
            setErrors(true)
        } else {
            setErrorEmail('')
            setIsSuccess(true)
        }

        if ((name.length < 2) || (!/^\S+@\S+\.\S+$/.test(email)) || (name === currentUser.name) && (email === currentUser.email)) {
            setIsValid(true)
            setErrors(true)
            return
        } else {
            setIsValid(false)
            setIsSuccess(true)
        }
    };
    function handleNameChange(evt) {
        const target = evt.target;
        const value = target.value;
        setName(value);
        validateForm()
        setIsSuccess("");

    }
    function handleEmailChange(evt) {
        const target = evt.target;
        const value = target.value;
        setEmail(value);
        validateForm()
        setIsSuccess("");

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


    const [showMarketing, setShowMarketing] = useState(false);
    const [showLanding, setShowLanding] = useState(true)


    React.useEffect(() => {
        if (currentUser.name === values.name && currentUser.email === values.email) {
            setIsValid(true);
        } else { setIsValid(!isValid); }
    }, [currentUser, values]);



    const onClick = () => {
        setShowMarketing(!showMarketing);
        console.log("dd");
        setShowLanding(!showLanding);
    }

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

                                            value={name}
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
                                            className="form__container-item form__container-item_profile form__container-item_profile_email" value={email}
                                            onChange={handleEmailChange}
                                            required />
                                    </div>
                                </div>
                                <span className={`register__error ${errorEmail ? 'register__error_active' : ''}`}>{errorEmail}
                                </span>
                            </div>

                            < span className={`profile__errors ${!isWarning ? '' : 'profile__errors_active'}`}>
                                {"При обновлении профиля произошла ошибка.." || "Пользователь с таким email уже существует.."}
                            </span>
                            < span className=
                                " profile__errors profile__errors_active profile__errors_success"
                            >
                                {isSuccess}
                            </span>
                            <button type="submit" aria-label="Редактировать"
                                className={`form__button-profile form__button-profile_edit ${isValid ? "form__button-profile_disabled" : ''}`}
                                disabled={isValid} onClick={() => onClick()}

                            >Редактировать</button>
                            <Link to="/" className="profile__button-link" rel='' onClick={signOut} > Выйти из аккаунта</Link>

                        </form>

                    </div>
                </section>
            </main >
        </>
    )
}
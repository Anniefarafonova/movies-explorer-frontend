import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './Profile.css';
import HeaderAuth from '../HeaderAuth/HeaderAuth';
import * as MainApi from "../../utils/MainApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContextt/CurrentUserContext.js"

export default function Profile({ email }) {
    // стейт name
    const [name, setName] = React.useState('');
    const currentUser = useContext(CurrentUserContext);


    useEffect(() => {
        setName(currentUser.name);
    }, [currentUser]);

    return (
        <>
            <HeaderAuth />
            <main className="main">
                <section className="profile">
                    <div className="profile__container">
                        <form className="form form_profile" name="form-profile" noValidate>
                            <h2 className="form__title form__title_profile">Привет, Виталий!</h2>
                            <div className="form__container form__container_profile">
                                <div className="form__container-name" >
                                    <label className="form__container-span form__container-span_profile">Имя</label>
                                    <div className="form__container-names" >
                                        <input id="name" type="text" placeholder="" name="name"
                                            className="form__container-item form__container-item_profile form__container-item_profile_name" value={name || ''} required />
                                    </div>
                                </div>
                                <div className="form__container-name" >
                                    <label className="form__container-span form__container-span_profile">E-mail</label>
                                    <div className="form__container-names" >
                                        <input id="email" type="email" placeholder=" " name="email"
                                            className="form__container-item form__container-item_profile form__container-item_profile_email" value={email || ''} required />
                                    </div>
                                </div>
                            </div>
                            <button type="submit" aria-label="Редактировать" className="form__button-profile form__button-profile_edit">Редактировать</button>
                                <Link to="/signin" className="profile__button-link" rel=''>Выйти из аккаунта</Link>

                        </form>

                    </div>
                </section>
            </main>
        </>
    )
}
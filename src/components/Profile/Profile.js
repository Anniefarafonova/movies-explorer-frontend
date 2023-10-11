import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './Profile.css';
import HeaderAuth from '../HeaderAuth/HeaderAuth';

export default function Profile({ name }) {

    return (
        <>
            <HeaderAuth />
            <section className="profile">
                <div className="profile__container">
                    <form className="form form_profile" name="form-profile" noValidate>
                        <h2 className="form__title form__title_profile">Привет, Виталий!</h2>
                        <div className="form__container form__container_profile">
                            <div className="form__container-name" >
                                <label className="form__container-span form__container-span_profile">Имя</label>
                                <div className="form__container-names" >
                                    <input id="name" type="text" placeholder="" name="name"
                                        className="form__container-item form__container-item_profile form__container-item__profile-name" required />
                                </div>
                            </div>
                            <div className="form__container-name" >
                                <label className="form__container-span form__container-span_profile">E-mail</label>
                                <div className="form__container-names" >
                                    <input id="email" type="email" placeholder=" " name="email"
                                        className="form__container-item form__container-item_profile form__container-item__profile-email" required />
                                </div>
                            </div>
                        </div>
                        <button type="submit" aria-label="Редактировать" className="form__button-profile form__button-profile_edit">Редактировать</button>
                        <Link to="/" className="profile__button-link" rel=''>
                            <button type="submit" aria-label="Выйти из аккаунта" className="form__button-profile form__button-profile_signout">Выйти из аккаунта</button>
                        </Link>
                    </form>

                </div>
            </section>
        </>
    )
}
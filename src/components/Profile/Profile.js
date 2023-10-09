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
                    <form className="form form_profile" name="form-login" noValidate>
                        <h2 className="form__container-title form__container-title_profile">Привет, Виталий!</h2>
                        <div className="form__container-texts form__container-texts_profile" >
                            <div className="form__container-name" >
                                <label className="form__item-span form__item-span_profile">Имя</label>
                                <div className="form__container-names" >
                                    <input id="name" type="text" placeholder="" name="name"
                                        className="form__item form__item_profile  form__item_profile-name" required />
                                </div>
                            </div>
                            <div className="form__container-name" >
                                <label className="form__item-span form__item-span_profile">E-mail</label>
                                <div className="form__container-names" >
                                    <input id="email" type="email" placeholder=" " name="email"
                                        className="form__item form__item_profile form__item_profile-email" required />
                                </div>
                            </div>
                        </div>
                        <button type="submit" aria-label="Редактировать" className="profile__button profile__button-edit">Редактировать</button>
                        <Link to="/" className="profile__button-link">
                        <button type="submit" aria-label="Выйти из аккаунта" className="profile__button profile__button-signout">Выйти из аккаунта</button>
                        </Link>
                    </form>
                </div>
            </section>
        </>
    )
}
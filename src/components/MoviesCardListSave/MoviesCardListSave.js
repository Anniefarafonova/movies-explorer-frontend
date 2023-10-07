import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './MoviesCardListSave.css';
import Footer from "../Footer/Footer";
import MoviesCard from "../MoviesCard/MoviesCard";
import Header from "../Header/Header";
import MoviesCardSave from "../MoviesCardSave/MoviesCardSave";


export default function MoviesCardListSave({ }) {

    return (
        <>
            <section className="elements">
                <div className="elements__list-template">
                    <MoviesCardSave />
                </div>
                <div className="element__container">
                    <button className="element__container-button" type="button">Ещё</button>
                </div>

                <Footer />
            </section>
        </>
    )
}



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
                <div className="elements__container">
                    <button className="elements__container-button" type="button">Ещё</button>
                </div>
                <Footer />
            </section>
        </>
    )
}



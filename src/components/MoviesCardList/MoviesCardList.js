import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './MoviesCardList.css';
import Footer from "../Footer/Footer";
import MoviesCard from "../MoviesCard/MoviesCard";
import Header from "../Header/Header";


export default function MoviesCardList({ }) {

    return (
        <>
            <section className="elements">
                <div className="elements__list-template">
                    <MoviesCard />
                </div>
                <div className="elements__container">
                    <button className="elements__container-button" type="button">Ещё</button>
                </div>
                <Footer />
            </section>
        </>
    )
}



import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './MoviesCard.css';
import Footer from "../Footer/Footer";
import MainApi from "../../utils/MainApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContextt/CurrentUserContext.js"


export default function MoviesCard({ movie, filterMovies, savedMovies, setSavedMovies, handleAddSubmit, handleDeleteSubmit, isSaved }) {
    const [isLike, setIsLike] = React.useState(false);
    useEffect(() => {
        const isLiked = savedMovies.some((element => movie.id === element.movieId));
        setIsLike(isLiked);
    }, [savedMovies]);

    function onClick() {
        if (savedMovies.some(element => movie.id === element.movieId)) {
            setIsLike(false)
            handleAddSubmit(movie)
        } else {
            setIsLike(true)
            handleAddSubmit(movie)
        }
        setIsLike(!isLike);
    }

    return (
        <>
            <article className="element">
                <Link to={movie.trailerLink} target='_blank'>
                <img className="element__image" alt=""
                    src={
                        !isSaved ?
                            `https://api.nomoreparties.co${movie.image.url}` :
                            movie.image
                    } />
            </Link>

            <ul className="element__list">
                <li className="element__list-self">
                    <h2 className="element__list-title">{movie.nameRU}</h2>
                    {isSaved ? (
                        <button className="element__list-dislike"
                            onClick={() => handleDeleteSubmit(movie._id)}
                        />
                    ) : (
                        <button
                            className={
                                isLike
                                    ? `element__list-like_active`
                                    : `element__list-like`
                            }
                            type="button"
                            aria-label="Значок лайк"
                            onClick={onClick}
                        />
                    )}
                </li>
                <li className="element__list-item">
                    <p className="element__list-time">{movie.duration}</p>
                </li>
            </ul>
        </article >

        </>
    )
}


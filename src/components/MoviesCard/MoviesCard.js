import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './MoviesCard.css';
import Footer from "../Footer/Footer";
import MainApi from "../../utils/MainApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContextt/CurrentUserContext.js"


export default function MoviesCard({ movie, filterMovies, savedMovies,  setSavedMovies, handleAddSubmit, handleDeleteSubmit, isSaved}) {
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
            // setIsLike(true)
            handleAddSubmit(movie)
        }
        setIsLike(!isLike);
      }
       
    return (
        <>
            <article className="element">
                <img className="element__image" alt="" 
                src={ 
                    !isSaved ?
                    `https://api.nomoreparties.co${movie.image.url}`:
                    movie.image
                } />

                
                <ul className="element__list">
                    <li className="element__list-self">
                        <h2 className="element__list-title">{movie.nameRU}</h2>
                        {isSaved ? (
                            <button className="element__list-dislike" 
                            // onClick={handleDeleteSubmit}
                            // onClick={() => onDelete(data._id)}
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
            </article>

        </>
    )
}





    
    //   function onClick() {
    //     if (isLike) {
    //         handleAddSubmit()
    //         return
    //     //   const moviesForSearch = savedMovies.find((i) => {
    //     //     return i.movieId === movie.id;
    //     // setSavedMovies((movie) => movie.map((c) => c._id === movie._id ? movie : c));
          
    //     //   handleDeleteSubmit(moviesForSearch._id);
    //     } else {
    //         // handleDeleteSubmit();
    //     }
    //     setIsLike(!isLike);
    //   }
    
    //   function handleDeleteMovie(evt) {
    //     evt.preventDefault()
    //     handleDeleteSubmit(movie._id);
    //   }


     //   const [click, setClick] = useState(false)

    //   useEffect(() => {
    //     const isLiked = savedMovies.some(i => i === CurrentUserContext._id);
    //     setIsLike(isLiked);
    //     // setIsLike(savedMovies.some(element => movie.id === element.movieId))
    //   }, [savedMovies])
    
    //   function onClick() {
    //     if (isLike) {
    //               const moviesForSearch = savedMovies.find((i) => {
    //                 return i.movieId === movie.id.toString();
    //               });
    //     // if (savedMovies.some(element => movie.id === element.movieId)) {
    //     //     setIsLike(true)
    //     //     handleAddSubmit(movie)
    //         console.log("yes");
    //     } else {
    //         setIsLike(false)
    //         handleAddSubmit(movie)
    //         console.log("not");
    //     }
    //   }


    //   function handleCardLike(movie) {
    //     const isLiked = savedMovies.some(i => i === currentUser._id);
    //     MainApi
    //       .changeLikeStatus(movie, movie._id, !isLiked, localStorage.token)
    //       .then((newCard) => {
    //         setSavedMovies((movie) => movie.map((c) => c._id === movie._id ? newCard : c));
    //       })
    //       .catch((error) => console.error(`Ошибка like ${error}`));
    //     }
    //     function onClick() {
    //         handleCardLike(savedMovies);
    //     }
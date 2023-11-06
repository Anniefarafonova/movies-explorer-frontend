import React, { useState, useEffect, useContext, useRef, useMemo } from "react";
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import { useResize, CARDS_SCREEN_XL, ADD_CARDS_SCREEN_XL, CARDS_SCREEN_LG, ADD_CARDS_SCREEN_LG, CARDS_SCREEN_SM, ADD_CARDS_SCREEN_SM } from '../../utils/allScreen';
import Preloader from "../Preloader/Preloader";


export default function MoviesCardList({ isSaved, filterMovies, handleAddSubmit, handleDeleteSubmit, savedMovies, setSavedMovies, loadingError }) {
    const { isScreenSm, isScreenLg, isScreenXl } = useResize();
    const [page, setPage] = useState(1);

    return (
        <section className="elements">
            {filterMovies.length > 0 ? (
                <ul className="elements__list-template">
                    {
                        isScreenXl ?
                            (filterMovies.slice(filterMovies * CARDS_SCREEN_XL, page * CARDS_SCREEN_XL).map((movie) => (
                                <MoviesCard
                                    // key={movie._id}
                                    key={movie.id || movie._id}
                                    movie={movie}
                                    savedMovies={savedMovies}
                                    handleAddSubmit={handleAddSubmit}
                                    handleDeleteSubmit={handleDeleteSubmit}
                                    isSaved={isSaved}
                                    setSavedMovies={setSavedMovies} />
                            )))
                            :
                            isScreenLg ?
                                (filterMovies.slice(filterMovies * CARDS_SCREEN_LG, page * CARDS_SCREEN_LG).map((movie) => (
                                    <MoviesCard
                                        key={movie.id || movie._id}
                                        movie={movie}
                                        handleAddSubmit={handleAddSubmit}
                                        handleDeleteSubmit={handleDeleteSubmit}
                                        isSaved={isSaved}
                                        savedMovies={savedMovies} />
                                )))
                                :
                                isScreenSm ?
                                    (filterMovies.slice(filterMovies * 5, page + 1 * 4).map((movie) => (
                                        <MoviesCard
                                            key={movie.id || movie._id}
                                            movie={movie}
                                            handleAddSubmit={handleAddSubmit}
                                            handleDeleteSubmit={handleDeleteSubmit}
                                            isSaved={isSaved}
                                            savedMovies={savedMovies} />
                                    )))
                                    :
                                    (filterMovies.slice(0, 5)).map((movie) => (
                                        <MoviesCard
                                            key={movie.id || movie._id}
                                            movie={movie}
                                            handleAddSubmit={handleAddSubmit}
                                            handleDeleteSubmit={handleDeleteSubmit}
                                            isSaved={isSaved}
                                            savedMovies={savedMovies} />
                                    ))
                    }

                </ul>
            ) : loadingError ? (
                // <div className="elements__error">Ничего не найдено</div>
                <div className="elements__error">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз </div>
            ) : (
                // <div className="elements__error">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз </div>
                <div className="elements__error">Ничего не найдено</div>
            )
            }


            <div className="elements__container">

                {isScreenXl ? (
                    filterMovies.length >= 16 ? (
                        // filterMovies.length > 0
                        <button className="elements__container-button" type="button"
                            onClick={() => setPage(page + 1)}
                        >Ещё
                        </button>
                    ) : (null))

                    : isScreenLg ?
                        (filterMovies.length >= 8 ? (
                            // filterMovies.length > 0
                            <button className="elements__container-button" type="button"
                                onClick={() => setPage(page + 1)}
                            >Ещё
                            </button>
                        ) : (null))
                        : isScreenSm ?
                            (filterMovies.length >= 5 ? (
                                // filterMovies.length > 0
                                <button className="elements__container-button" type="button"
                                    onClick={() => setPage(page + 1)}
                                >Ещё
                                </button>
                            ) : (null))

                            : (null)
                }
            </div>
        </section >

    )


}

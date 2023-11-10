import React, { useState, useEffect, useContext, useRef, useMemo, useCallback } from "react";
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import { useResize, SCREEN_XL, SCREEN_LG, CARDS_SCREEN_XL, SCREEN_SM, ADD_CARDS_SCREEN_XL, CARDS_SCREEN_LG, ADD_CARDS_SCREEN_LG, CARDS_SCREEN_SM, ADD_CARDS_SCREEN_SM, width } from '../../utils/allScreen';
import Preloader from "../Preloader/Preloader";


export default function MoviesCardList({ isSaved, filterMovies, handleAddSubmit, handleDeleteSubmit, savedMovies, setSavedMovies, loadingError, firstSearch, serverError, isLoading, }) {
    const { isScreenSm, isScreenLg, isScreenXl, width } = useResize();
    const [page, setPage] = useState(1);

    const changeMovies = useCallback(() => {
        if (width >= SCREEN_XL) {
            setPage(CARDS_SCREEN_XL);
        }
        else if (width >= SCREEN_LG) {
            setPage(CARDS_SCREEN_LG);
        }
        else if (width >= SCREEN_SM) {
            setPage(CARDS_SCREEN_SM);
        }
        else {
            setPage(CARDS_SCREEN_SM);
        }
    });
    useEffect(() => {
        changeMovies()
    }, [filterMovies, width]);

    useEffect(() => {
        window.addEventListener("resize", changeMovies);
        return () => {
            window.removeEventListener("resize", changeMovies);
        }
    }, [filterMovies, changeMovies]);

    const onClick = () => {
        if (width >= SCREEN_XL) {
            setPage(page + ADD_CARDS_SCREEN_XL);
        } else if (width >= SCREEN_LG) {
            setPage(page + ADD_CARDS_SCREEN_LG);
        } else if (width >= SCREEN_SM) {
            setPage(page + ADD_CARDS_SCREEN_SM);
        }
        else {
            setPage(page + ADD_CARDS_SCREEN_SM);
        }

    };

    return (
        <section className="elements">
            {isLoading ? <Preloader /> :
                filterMovies.length !== 0 ? (
                    <ul className="elements__list-template">
                        {
                            (filterMovies.slice(0, page).map((movie) => (
                                <MoviesCard
                                    key={movie.id || movie._id}
                                    movie={movie}
                                    savedMovies={savedMovies}
                                    handleAddSubmit={handleAddSubmit}
                                    handleDeleteSubmit={handleDeleteSubmit}
                                    isSaved={isSaved}
                                    setSavedMovies={setSavedMovies} />
                            )))
                        }

                    </ul>
                ) : firstSearch ? (
                    <div className="elements__error">Ничего не найдено</div>

                ) : (
                    null
                )
            }

            < div className="elements__container">
                {
                    page < filterMovies.length && (

                        <button className="elements__container-button" type="button"
                            onClick={onClick}
                        >Ещё </button>

                    )
                }
            </div>
        </section >

    )


}


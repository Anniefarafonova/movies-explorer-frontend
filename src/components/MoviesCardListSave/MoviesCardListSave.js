import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './MoviesCardListSave.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import MoviesCardSave from "../MoviesCardSave/MoviesCardSave";
import { useResize, CARDS_SCREEN_XL, ADD_CARDS_SCREEN_XL, CARDS_SCREEN_LG, ADD_CARDS_SCREEN_LG, CARDS_SCREEN_SM, ADD_CARDS_SCREEN_SM } from '../../utils/allScreen';

export default function MoviesCardListSave({ savedMovies, handleDeleteSubmit }) {
    const { width, isScreenSm, isScreenLg, isScreenXl } = useResize();

   
    const [page, setPage] = useState(1);

    return (
                <section className="elements">
                    {savedMovies.length > 0 ? (
                        < ul className="elements__list-template">
                            {isScreenXl ?
                                (savedMovies.slice(savedMovies * CARDS_SCREEN_XL, page * CARDS_SCREEN_XL).map((data) => (
                                    <MoviesCardSave
                                        key={data._id}
                                        data={data}
                                        handleDeleteSubmit={handleDeleteSubmit}
                                    />
                                )
                                ))
                                :
                                isScreenLg ?
                                    (savedMovies.slice(savedMovies * CARDS_SCREEN_LG, page * CARDS_SCREEN_LG).map((data) => (
                                        <MoviesCardSave
                                            key={data._id}
                                            data={data}
                                            handleDeleteSubmit={handleDeleteSubmit}
                                        />
                                    )
                                    ))
                                    :
                                    isScreenSm ?
                                        (savedMovies.slice(savedMovies * 5, page + 1 * 4).map((data) => (
                                            <MoviesCardSave
                                                key={data._id}
                                                data={data}
                                                handleDeleteSubmit={handleDeleteSubmit}
                                            />
                                        )
                                        ))
                                        :
                                        (savedMovies.slice(0, 5)).map((data) => (
                                            <MoviesCardSave
                                                key={data._id}
                                                data={data}
                                                handleDeleteSubmit={handleDeleteSubmit}
                                            // (null)
                                            />
                                        ))
                            }

                        </ul>
                    ) : (
                        <div className="elements__error">Ничего не найдено</div>
                    )
                    }

                    <div className="elements__container">
                        <button className="elements__container-button" type="button"

                            onClick={() => setPage(page + 1)}
                        >Ещё
                        </button>
                    </div>
                </section >
                )
}




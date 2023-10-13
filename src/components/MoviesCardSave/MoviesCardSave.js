import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './MoviesCardSave.css';
import Footer from "../Footer/Footer";


export default function MoviesCardSave({ }) {
    return (
        <>
            <article className="element">
                <img className="element__image" alt="" />
                <ul className="element__list">
                    <li className="element__list-self">
                        <h2 className="element__list-title">Текст</h2>
                        <button
                            type="button"
                            className="element__list-dislike"
                            aria-label="Значок лайк"
                        />
                    </li>
                    <li className="element__list-item">
                        <p className="element__list-time">1ч 42м</p>
                    </li>
                </ul>
            </article>
            <article className="element">
                <img className="element__image" alt="" />
                <ul className="element__list">
                    <li className="element__list-self">
                        <h2 className="element__list-title">Текст</h2>
                        <button
                            type="button"
                            className="element__list-dislike"
                            aria-label="Значок лайк"
                        />
                    </li>
                    <li className="element__list-item">
                        <p className="element__list-time">1ч 42м</p>
                    </li>
                </ul>
            </article>
            <article className="element">
                <img className="element__image" alt="" />
                <ul className="element__list">
                    <li className="element__list-self">
                        <h2 className="element__list-title">Текст</h2>
                        <button
                            type="button"
                            className="element__list-dislike"
                            aria-label="Значок лайк"
                        />
                    </li>
                    <li className="element__list-item">
                        <p className="element__list-time">1ч 42м</p>
                    </li>
                </ul>
            </article>
            <article className="element">
                <img className="element__image" alt="" />
                <ul className="element__list">
                    <li className="element__list-self">
                        <h2 className="element__list-title">Текст</h2>
                        <button
                            type="button"
                            className="element__list-dislike"
                            aria-label="Значок лайк"
                        />
                    </li>
                    <li className="element__list-item">
                        <p className="element__list-time">1ч 42м</p>
                    </li>
                </ul>
            </article>
            <article className="element">
                <img className="element__image" alt="" />
                <ul className="element__list">
                    <li className="element__list-self">
                        <h2 className="element__list-title">Текст</h2>
                        <button
                            type="button"
                            className="element__list-dislike"
                            aria-label="Значок лайк"
                        />
                    </li>
                    <li className="element__list-item">
                        <p className="element__list-time">1ч 42м</p>
                    </li>
                </ul>
            </article>
        
        </>
    )
}


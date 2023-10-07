import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './MoviesCard.css';
import Footer from "../Footer/Footer";


export default function MoviesCard({ }) {
    return (
        <>
            <article className="element">
                <img className="element__image" alt="" />
                <div className="element__list">
                    <div className="element__list-self">
                        <h2 className="element__title">Текст</h2>
                        <button
                            type="button"
                            className="element__like-button"
                            aria-label="Значок лайк"
                        />
                    </div>
                    <p className="element__time">1ч 42м</p>
                </div>
            </article>
            <article className="element">
                <img className="element__image" alt="" />
                <div className="element__list">
                    <div className="element__list-self">
                        <h2 className="element__title">Текст</h2>
                        <button
                            type="button"
                            className="element__like-button"
                            aria-label="Значок лайк"
                        />
                    </div>
                    <p className="element__time">1ч 42м</p>
                </div>
            </article>
            <article className="element">
                <img className="element__image" alt="" />
                <div className="element__list">
                    <div className="element__list-self">
                        <h2 className="element__title">Текст</h2>
                        <button
                            type="button"
                            className="element__like-button"
                            aria-label="Значок лайк"
                        />
                    </div>
                    <p className="element__time">1ч 42м</p>
                </div>
            </article>
            <article className="element">
                <img className="element__image" alt="" />
                <div className="element__list">
                    <div className="element__list-self">
                        <h2 className="element__title">Текст</h2>
                        <button
                            type="button"
                            className="element__like-button"
                            aria-label="Значок лайк"
                        />
                    </div>
                    <p className="element__time">1ч 42м</p>
                </div>
            </article>
            <article className="element">
                <img className="element__image" alt="" />
                <div className="element__list">
                    <div className="element__list-self">
                        <h2 className="element__title">Текст</h2>
                        <button
                            type="button"
                            className="element__like-button"
                            aria-label="Значок лайк"
                        />
                    </div>
                    <p className="element__time">1ч 42м</p>
                </div>
            </article>
            <article className="element">
                <img className="element__image" alt="" />
                <div className="element__list">
                    <div className="element__list-self">
                        <h2 className="element__title">Текст</h2>
                        <button
                            type="button"
                            className="element__like-button"
                            aria-label="Значок лайк"
                        />
                    </div>
                    <p className="element__time">1ч 42м</p>
                </div>
            </article>
            <article className="element">
                <img className="element__image" alt="" />
                <div className="element__list">
                    <div className="element__list-self">
                        <h2 className="element__title">Текст</h2>
                        <button
                            type="button"
                            className="element__like-button"
                            aria-label="Значок лайк"
                        />
                    </div>
                    <p className="element__time">1ч 42м</p>
                </div>
            </article>
            <article className="element">
                <img className="element__image" alt="" />
                <div className="element__list">
                    <div className="element__list-self">
                        <h2 className="element__title">Текст</h2>
                        <button
                            type="button"
                            className="element__like-button"
                            aria-label="Значок лайк"
                        />
                    </div>
                    <p className="element__time">1ч 42м</p>
                </div>
            </article>
            <article className="element">
                <img className="element__image" alt="" />
                <div className="element__list">
                    <div className="element__list-self">
                        <h2 className="element__title">Текст</h2>
                        <button
                            type="button"
                            className="element__like-button"
                            aria-label="Значок лайк"
                        />
                    </div>
                    <p className="element__time">1ч 42м</p>
                </div>
            </article>
            <article className="element">
                <img className="element__image" alt="" />
                <div className="element__list">
                    <div className="element__list-self">
                        <h2 className="element__title">Текст</h2>
                        <button
                            type="button"
                            className="element__like-button"
                            aria-label="Значок лайк"
                        />
                    </div>
                    <p className="element__time">1ч 42м</p>
                </div>
            </article>
            <article className="element">
                <img className="element__image" alt="" />
                <div className="element__list">
                    <div className="element__list-self">
                        <h2 className="element__title">Текст</h2>
                        <button
                            type="button"
                            className="element__like-button"
                            aria-label="Значок лайк"
                        />
                    </div>
                    <p className="element__time">1ч 42м</p>
                </div>
            </article>
            <article className="element">
                <img className="element__image" alt="" />
                <div className="element__list">
                    <div className="element__list-self">
                        <h2 className="element__title">Текст</h2>
                        <button
                            type="button"
                            className="element__like-button"
                            aria-label="Значок лайк"
                        />
                    </div>
                    <p className="element__time">1ч 42м</p>
                </div>
            </article>
        </>
    )
}


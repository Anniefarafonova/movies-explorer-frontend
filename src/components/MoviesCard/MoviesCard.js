import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './MoviesCard.css';
import Footer from "../Footer/Footer";


export default function MoviesCard({ }) {
    return (
        <>
            <article className="element">
                <img className="element__image" alt="" />
                <ul className="element__list">
                    <li className="element__list-self">
                        <h2 className="element__list-title">Текст</h2>
                        <button
                            type="button"
                            className="element__list-like"
                            aria-label="Значок лайк"
                        />
                    </li>
                    <p className="element__list-time">1ч 42м</p>
                </ul>
            </article>
            <article className="element">
                <img className="element__image" alt="" />
                <ul className="element__list">
                    <li className="element__list-self">
                        <h2 className="element__list-title">Текст</h2>
                        <button
                            type="button"
                            className="element__list-like"
                            aria-label="Значок лайк"
                        />
                    </li>
                    <p className="element__list-time">1ч 42м</p>
                </ul>
            </article>
            <article className="element">
                <img className="element__image" alt="" />
                <ul className="element__list">
                    <li className="element__list-self">
                        <h2 className="element__list-title">Текст</h2>
                        <button
                            type="button"
                            className="element__list-like"
                            aria-label="Значок лайк"
                        />
                    </li>
                    <p className="element__list-time">1ч 42м</p>
                </ul>
            </article>
            <article className="element">
                <img className="element__image" alt="" />
                <ul className="element__list">
                    <li className="element__list-self">
                        <h2 className="element__list-title">Текст</h2>
                        <button
                            type="button"
                            className="element__list-like"
                            aria-label="Значок лайк"
                        />
                    </li>
                    <p className="element__list-time">1ч 42м</p>
                </ul>
            </article>
            <article className="element">
                <img className="element__image" alt="" />
                <ul className="element__list">
                    <li className="element__list-self">
                        <h2 className="element__list-title">Текст</h2>
                        <button
                            type="button"
                            className="element__list-like"
                            aria-label="Значок лайк"
                        />
                    </li>
                    <p className="element__list-time">1ч 42м</p>
                </ul>
            </article>
            <article className="element">
                <img className="element__image" alt="" />
                <ul className="element__list">
                    <li className="element__list-self">
                        <h2 className="element__list-title">Текст</h2>
                        <button
                            type="button"
                            className="element__list-like"
                            aria-label="Значок лайк"
                        />
                    </li>
                    <p className="element__list-time">1ч 42м</p>
                </ul>
            </article>
            <article className="element">
                <img className="element__image" alt="" />
                <ul className="element__list">
                    <li className="element__list-self">
                        <h2 className="element__list-title">Текст</h2>
                        <button
                            type="button"
                            className="element__list-like"
                            aria-label="Значок лайк"
                        />
                    </li>
                    <p className="element__list-time">1ч 42м</p>
                </ul>
            </article>
            <article className="element">
                <img className="element__image" alt="" />
                <ul className="element__list">
                    <li className="element__list-self">
                        <h2 className="element__list-title">Текст</h2>
                        <button
                            type="button"
                            className="element__list-like"
                            aria-label="Значок лайк"
                        />
                    </li>
                    <p className="element__list-time">1ч 42м</p>
                </ul>
            </article>
            <article className="element">
                <img className="element__image" alt="" />
                <ul className="element__list">
                    <li className="element__list-self">
                        <h2 className="element__list-title">Текст</h2>
                        <button
                            type="button"
                            className="element__list-like"
                            aria-label="Значок лайк"
                        />
                    </li>
                    <p className="element__list-time">1ч 42м</p>
                </ul>
            </article>
            <article className="element">
                <img className="element__image" alt="" />
                <ul className="element__list">
                    <li className="element__list-self">
                        <h2 className="element__list-title">Текст</h2>
                        <button
                            type="button"
                            className="element__list-like"
                            aria-label="Значок лайк"
                        />
                    </li>
                    <p className="element__list-time">1ч 42м</p>
                </ul>
            </article>
            <article className="element">
                <img className="element__image" alt="" />
                <ul className="element__list">
                    <li className="element__list-self">
                        <h2 className="element__list-title">Текст</h2>
                        <button
                            type="button"
                            className="element__list-like"
                            aria-label="Значок лайк"
                        />
                    </li>
                    <p className="element__list-time">1ч 42м</p>
                </ul>
            </article>
            <article className="element">
                <img className="element__image" alt="" />
                <ul className="element__list">
                    <li className="element__list-self">
                        <h2 className="element__list-title">Текст</h2>
                        <button
                            type="button"
                            className="element__list-like"
                            aria-label="Значок лайк"
                        />
                    </li>
                    <p className="element__list-time">1ч 42м</p>
                </ul>
            </article>
            <article className="element">
                <img className="element__image" alt="" />
                <ul className="element__list">
                    <li className="element__list-self">
                        <h2 className="element__list-title">Текст</h2>
                        <button
                            type="button"
                            className="element__list-like"
                            aria-label="Значок лайк"
                        />
                    </li>
                    <p className="element__list-time">1ч 42м</p>
                </ul>
            </article>
            <article className="element">
                <img className="element__image" alt="" />
                <ul className="element__list">
                    <li className="element__list-self">
                        <h2 className="element__list-title">Текст</h2>
                        <button
                            type="button"
                            className="element__list-like"
                            aria-label="Значок лайк"
                        />
                    </li>
                    <p className="element__list-time">1ч 42м</p>
                </ul>
            </article>
            <article className="element">
                <img className="element__image" alt="" />
                <ul className="element__list">
                    <li className="element__list-self">
                        <h2 className="element__list-title">Текст</h2>
                        <button
                            type="button"
                            className="element__list-like"
                            aria-label="Значок лайк"
                        />
                    </li>
                    <p className="element__list-time">1ч 42м</p>
                </ul>
            </article>
            <article className="element">
                <img className="element__image" alt="" />
                <ul className="element__list">
                    <li className="element__list-self">
                        <h2 className="element__list-title">Текст</h2>
                        <button
                            type="button"
                            className="element__list-like"
                            aria-label="Значок лайк"
                        />
                    </li>
                    <p className="element__list-time">1ч 42м</p>
                </ul>
            </article>

        </>
    )
}


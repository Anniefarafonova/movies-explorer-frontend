import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './Error.css';


export default function Error({ }) {

    return (
        <>
            <div className="error">
                <div className="error__container">
                    <h1 className="error__title">404</h1>
                    <p className="error__text">Страница не найдена</p>
                </div>
                <Link to="/" className="error__link">Назад</Link>
            </div>
        </>
    )
}
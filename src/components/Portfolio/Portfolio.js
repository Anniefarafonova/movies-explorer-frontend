import React from 'react'
import imageArrow from '../../images/arrow.png'

import './Portfolio.css';

export default function Portfolio() {

    return (
        <>
            <div className="prtfolio ">
                <h3 className="portfolio__title">Портфолио</h3>
                <ul className="portfolio__list">
                    <li className="portfolio__list-item">
                        {/* <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="portfolio__list-link"
                    > */}
                        <p className="portfolio__list-text">Статичный сайт</p>
                        <img
                            className="portfolio__list-img"
                            src={imageArrow}
                            alt="Стрелка"
                        />
                        {/* </a> */}
                    </li>
                    <li className="portfolio__list-item">
                        {/* <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="portfolio__list-link"
                    > */}
                        <p className="portfolio__list-text">Адаптивный сайт</p>
                        <img
                            className="portfolio__list-img"
                            src={imageArrow}
                            alt="Стрелка"
                        />
                        {/* </a> */}
                    </li>
                    <li className="portfolio__list-item">
                        {/* <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="portfolio__list-link"
                    > */}
                        <p className="portfolio__list-text">Одностраничное приложение</p>
                        <img
                            className="portfolio__list-img"
                            src={imageArrow}
                            alt="Стрелка"
                        />
                        {/* </a> */}
                    </li>
                </ul>
            </div>
        </>
    )
}

import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import imageArrow from '../../images/arrow.png'

import './Portfolio.css';

export default function Portfolio() {

    return (
        <>
            <section className="portfolio ">
                <h3 className="portfolio__title">Портфолио</h3>
                <ul className="portfolio__list">
                    <Link to="https://github.com/Anniefarafonova/react-mesto-auth" className="portfolio__list-link" target="_blank">
                        <li className="portfolio__list-item">
                            <p className="portfolio__list-text">Статичный сайт</p>
                            <img
                                className="portfolio__list-img"
                                src={imageArrow}
                                alt="Стрелка"
                            />
                        </li>
                    </Link>
                    <Link to="https://github.com/Anniefarafonova/russian-travel" className="portfolio__list-link" target="_blank">
                        <li className="portfolio__list-item">
                            <p className="portfolio__list-text">Адаптивный сайт</p>
                            <img
                                className="portfolio__list-img"
                                src={imageArrow}
                                alt="Стрелка"
                            />
                        </li>
                    </Link>
                    <Link to="https://github.com/Anniefarafonova/how-to-learn" className="portfolio__list-link" target="_blank">
                        <li className="portfolio__list-item">
                            <p className="portfolio__list-text">Одностраничное приложение</p>
                            <img
                                className="portfolio__list-img"
                                src={imageArrow}
                                alt="Стрелка"
                            />
                        </li>
                    </Link>
                </ul>
            </section >
        </>
    )
}

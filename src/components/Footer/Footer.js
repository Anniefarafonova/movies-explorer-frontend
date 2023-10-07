import React from 'react'
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
        <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
        <div className="footer__container">
          <p className="footer__copyright"> ©2023</p>
          <nav className="footer__navigation">
            <ul className="footer__links">
              <li className="footer__container-links">
                <a
                  className="footer__link"
                  href="https://yandex.ru/maps"
                  target="_blank"
                >
                  Яндекс.Практикум
                </a>
              </li>
              <li className="footer__container-links">
                <a
                  className="footer__link"
                  href="https://yandex.ru/pogoda"
                  target="_blank"
                >
                  Github
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    )
}
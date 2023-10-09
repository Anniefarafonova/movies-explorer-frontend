import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__container">
        <p className="footer__copyright"> ©2023</p>
        <nav className="footer__navigation">
          <ul className="footer__container-links">
            <li className="footer__links">
              <Link to="https://practicum.yandex.ru/" className="footer__link" target="_blank">
                Яндекс.Практикум
              </Link>
            </li>
            <li className="footer__links">
              <Link to="https://github.com/git-guides" className="footer__link" target="_blank">
                Github
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
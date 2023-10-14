import React from 'react'
import { HashLink } from 'react-router-hash-link';
import { Link, useNavigate } from 'react-router-dom';
import imageLanding from '../../images/landing-logo.svg'
import './Promo.css';


export default function Promo({ children }) {
  return (
    <>

      <section className="promo">
        <div className="promo__container">
          <h1 className="promo__container-title">
            Учебный проект студента факультета Веб‑разработки.
          </h1>
          <p className="promo__container-text">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
          <HashLink className="promo__container-link" smooth to='/#section1'> Узнать больше </HashLink>
        </div>
        <img className="promo__img" src={imageLanding} alt="Логотип" />
      </section>
    </>
  )
}
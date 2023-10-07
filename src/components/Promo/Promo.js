import React from 'react'
import imageLanding from '../../images/landing-logo.png'
import './Promo.css';


export default function Promo({ children }) {
  return (
    <>

      <div className="promo">
        <div className="promo__container">
          <h1 className="promo__title">
            Учебный проект студента факультета Веб‑разработки.
          </h1>
          <p className="promo__text">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
          <a className="promo__link" href="#">
            Узнать больше
          </a>
        </div>
        <img className="promo__img" src={imageLanding} alt="Логотип" />
      </div>
    </>
  )
}
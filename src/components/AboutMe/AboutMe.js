import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import imageFoto from '../../images/foto_pic.png'
import './AboutMe.css';

export default function AboutMe({ }) {
  return (
    <section className="aboutme">
      <h2 className="aboutme__header">Студент</h2>
      <div className="aboutme__container">
        <div className="aboutme__container-text">
          <h3 className="aboutme__name">Виталий</h3>
          <p className="aboutme__job">Фронтенд-разработчик, 30 лет</p>
          <p className="aboutme__text">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня
            есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно
            начал кодить. С 2015 года работал в компании «СКБ Контур». После того,
            как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и
            ушёл с постоянной работы.
          </p>
          <Link to="https://github.com/Anniefarafonova?tab=repositories" className="aboutme__link" target="_blank" rel=''>Github</Link>

        </div>
        <img className="aboutme__foto" src={imageFoto} alt="Логотип" />
      </div>
    </section >
  )
}

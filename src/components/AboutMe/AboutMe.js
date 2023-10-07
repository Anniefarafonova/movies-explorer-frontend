import React from 'react'
import imageFoto from '../../images/foto_pic.png'
import './AboutMe.css';

export default function AboutMe({ }) {
  return (
    <div className="aboutme">
      <h3 className="aboutme__header">Студент</h3>
      <div className="aboutme__container">
        <div className="aboutme__container-text">
          <h2 className="aboutme__name">Виталий</h2>
          <p className="aboutme__job">Фронтенд-разработчик, 30 лет</p>
          <p className="aboutme__text">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня
            есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно
            начал кодить. С 2015 года работал в компании «СКБ Контур». После того,
            как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и
            ушёл с постоянной работы.
          </p>
          <a className="aboutme__link" href="#">
            Github
          </a>
        </div>
        <img className="aboutme__foto" src={imageFoto} alt="Логотип" />
      </div>
    </div >
  )
}

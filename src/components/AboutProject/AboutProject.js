import React from 'react'
import './AboutProject.css';

export default function AboutProject() {
  return (
    <>
      <div className="aboutproject">
        <h2 className="aboutproject__header">О проекте</h2>
        <div className="aboutproject__container">
          <div className="aboutproject__info">
            <h2 className="aboutproject__title">Дипломный проект включал 5 этапов</h2>
            <p className="aboutproject__text">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div className="aboutproject__info">
            <h2 className="aboutproject__title aboutproject__title_two">
              На выполнение диплома ушло 5 недель
            </h2>
            <p className="aboutproject__text  aboutproject__text_two">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className="aboutproject__containers">
          <div className="aboutproject__time aboutproject__time_one">
            <h4 className="aboutproject__list-info boutproject__list-info_back">
              1 неделя
            </h4>
            <p className="aboutproject__list-text">Back-end</p>
          </div>
          <div className="aboutproject__time aboutproject__time_two">
            <h4 className="aboutproject__list-info aboutproject__list-info_front">
              4 неделя
            </h4>
            <p className="aboutproject__list-text">Front-end</p>
          </div>
        </div>
      </div>
    </>
  )
}
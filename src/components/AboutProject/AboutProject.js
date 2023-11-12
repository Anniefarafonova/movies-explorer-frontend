import React from 'react'
import './AboutProject.css';

export default function AboutProject() {
  return (
    <>
      <section className="aboutproject" id="section1">
        <h2 className="aboutproject__header">О проекте</h2>
        <div className="aboutproject__container">
          <div className="aboutproject__container-info">
            <h3 className="aboutproject__container-title">Дипломный проект включал 5 этапов</h3>
            <p className="aboutproject__container-text">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div className="aboutproject__container-info">
            <h3 className="aboutproject__container-title aboutproject__container-title_two">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="aboutproject__container-text  aboutproject__container-text_two">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className="aboutproject__containers">
          <div className="aboutproject__containers-time aboutproject__containers-time_one">
            <h4 className="aboutproject__containers-list aboutproject__containers-list_back">
              1 неделя
            </h4>
            <p className="aboutproject__containers-text">Back-end</p>
          </div>
          <div className="aboutproject__containers-time aboutproject__containers-time_two  aboutproject__time aboutproject__time_two">
            <h4 className="aboutproject__containers-list aboutproject__containers-list_front">
              4 неделя
            </h4>
            <p className="aboutproject__containers-text">Front-end</p>
          </div>
        </div>
      </section>
    </>
  )
}
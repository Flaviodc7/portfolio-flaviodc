import React from 'react'
import './experience.css'
import {BsFillCheckCircleFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h5>Estos son mis skills</h5>
      <h2>Mi experiencia</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Herramientas que utilizo</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillCheckCircleFill />
              <h4>HTML5</h4>
              <small className="text-light">Experimentado</small>
            </article>
            <article className="experience__details">
              <BsFillCheckCircleFill />
              <h4>CSS3</h4>
              <small className="text-light">Experimentado</small>
            </article>
            <article className="experience__details">
              <BsFillCheckCircleFill />
              <h4>JavaScript</h4>
              <small className="text-light">Experimentado</small>
            </article>
            <article className="experience__details">
              <BsFillCheckCircleFill />
              <h4>ReactJS</h4>
              <small className="text-light">Experimentado</small>
            </article>
            <article className="experience__details">
              <BsFillCheckCircleFill />
              <h4>BootStrap</h4>
              <small className="text-light">Experimentado</small>
            </article>
            <article className="experience__details">
              <BsFillCheckCircleFill />
              <h4>Tailwind</h4>
              <small className="text-light">Experimentado</small>
            </article>
            <article className="experience__details">
              <BsFillCheckCircleFill />
              <h4>GitHub</h4>
              <small className="text-light">Experimentado</small>
            </article>
            <article className="experience__details">
              <BsFillCheckCircleFill />
              <h4>GIT</h4>
              <small className="text-light">Experimentado</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
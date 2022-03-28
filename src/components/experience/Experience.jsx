import React from "react";
import "./experience.css";
import { data } from "./experience-list";
import { BsFillCheckCircleFill } from "react-icons/bs";


const Experience = () => {
  return (
    <section id="experience">
      <h3>Estos son mis skills</h3>
      <h2>Mi experiencia</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Herramientas que utilizo</h3>
          <div className="experience__content">
            {data.map(({ id, image, title, experience}) => {
          return (
            <article key={id} className="experience__details">
              <BsFillCheckCircleFill className="experience__details-icon"/>
              <div>
                <h4>{title}</h4>
                <small className="text-light">{experience}</small>
              </div>
            </article>
          );
        })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

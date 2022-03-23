import React from "react";
import "./projects.css";
import IMG1 from "../../assets/porfolio1.jpg";

const Projects = () => {
  return (
    <section id="projects">
      <h5>Mi trabajo reciente</h5>
      <h2>Proyectos</h2>
      <div class="container projects__container">
        <article className="project__items">
          <div classname="project_item-image">
            <img src={IMG1} alt="Primer proyecto" />
          </div>
          <h3>Este es un articulo del portafolio </h3>
          <div className="project__item-cta">
            <a
              href="http://github.com/fladiodc7"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              href="http://github.com/fladiodc7"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Projects;

import React from "react";
import "./about.css";
import me2about from "../../assets/me2-about.jpg";
import { RiAwardFill } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { VscFolderActive } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h3>Conoce</h3>
      <h2>Acerca de mi</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me2about} alt="Mi foto en acerca de" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <RiAwardFill className="about__icon" />
              <h5>Experiencia</h5>
              <small>1+ año de experiencia</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clientes</h5>
              <small>10+ Clientes</small>
            </article>
            <article className="about__card">
              <VscFolderActive className="about__icon" />
              <h5>Proyectos</h5>
              <small>10+ Finalizados</small>
            </article>
          </div>
          <p>
            Soy un programador web dedicado y motivado en brindar
            soluciones, aplicando lógica y buscando métodos resolutivos acordes.
            Me gustan los desafíos, ya que implican un constante aprendizaje,
            sea con un cambio de paradigma o una nueva tecnología
          </p>
          <a href="#contact" className="btn btn-primary">Contactame</a>
        </div>
      </div>
    </section>
  );
};

export default About;

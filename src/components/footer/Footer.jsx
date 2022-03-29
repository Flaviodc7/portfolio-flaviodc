import React from 'react'
import './footer.css'
import { data } from './footer-socials'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Flavio Coscarella</a>

      <ul className="permalinks">
        <li><a href="#">Inicio</a></li>
        <li><a href="#about">Acerca de</a></li>
        <li><a href="#experience">Experiencia</a></li>
        <li><a href="#projects">Proyectos</a></li>
        <li><a href="#testimonials">Testimonios</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
      <div className="footer__socials">
      {data.map(({ id, link, icon }) => {
          return (
        <a key={id} href={link} target="_blank" rel="noopener noreferrer">{icon}</a>
        );
      })}
      </div>
      <div className="footer__copyright">
        <small>&copy; Flavio Coscarella 2022. Todos los derechos reservados</small>
      </div>
    </footer>
  )
}

export default Footer
import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiCodewars} from 'react-icons/si'

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
        <a href="https://www.linkedin.com/in/flavio-coscarella/" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/Flaviodc7" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
        <a href="https://www.codewars.com/users/Flaviodc7" target="_blank" rel="noopener noreferrer"><SiCodewars/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Flavio Coscarella 2022. Todos los derechos reservados</small>
      </div>
    </footer>
  )
}

export default Footer
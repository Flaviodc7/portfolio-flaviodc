import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Flavio Coscarella</a>

      <ul className="permalinks">
        <li><a href="#">Inicio</a></li>
        <li><a href="#About">Acerca de</a></li>
        <li><a href="#About">Experiencia</a></li>
        <li><a href="#About">Proyectos</a></li>
        <li><a href="#About">Testimonios</a></li>
        <li><a href="#About">Contacto</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://linkedin"></a>
        <a href="https://Codewars"></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Flavio Coscarella 2022. Todos los derechos reservador</small>
      </div>
    </footer>
  )
}

export default Footer
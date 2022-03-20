import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me2.png'

const Header = () => {
  return (
    <header>
      <div className="container.header__container">
        <h5>Hola, soy</h5>
        <h1>Flavio Coscarella</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />

        <div className="me">
          <img src={ME}></img>
        </div>

        <a href="#contact" className="scroll_down">Ir hacia abajo</a>
      </div>
    </header>
  )
}

export default Header
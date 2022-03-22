import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me2.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="header__container">
        <h3>Hola, soy</h3>
        <h1>Flavio Coscarella</h1>
        <h3 className="text-light">Frontend Developer</h3>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="Mi Foto"></img>
        </div>

        <a href="#contact" className="scroll__down">Ir hacia abajo</a>
      </div>
    </header>
  )
}

export default Header
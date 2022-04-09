import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/photos/me2.webp";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="header__container">
        <div className="header__text">
          <h3>Hola, soy</h3>
          <h1>Flavio Coscarella</h1>
          <h3>Frontend Developer</h3>
          <CTA />
        </div>
        <div className="me">
          <img src={ME} alt="Mi Foto"></img>
        </div>

        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
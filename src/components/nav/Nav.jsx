import React from "react";
import { useState } from "react";
import "./nav.css";
import { AiFillHome } from "react-icons/ai";
import { RiAwardFill } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { BiBookAlt } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";
import { FiMessageCircle } from "react-icons/fi";

const Nav = () => {
  const [scroll, setScroll] = useState(false);

  const [activeNav, setActiveNav] = useState("#");

  const checkScroll = () => {
    if (scroll && window.pageYOffset <= 300) {
      setScroll(false);
      setActiveNav("#");
    } else if (!scroll && window.pageYOffset > 680) {
      setScroll(true);
      setActiveNav("#about");
    } else if ((window.pageYOffset > 1663) && (window.pageYOffset < 2257)) {
      setActiveNav("#experience");
    } else if ((window.pageYOffset > 2258) && (window.pageYOffset < 3132)) {
      setActiveNav("#projects");
    } else if ((window.pageYOffset > 3133) && (window.pageYOffset < 3509)) {
      setActiveNav("#testimonials");
    } else if (window.pageYOffset > 3510) {
      setActiveNav("#contact");
    }
  };
  window.addEventListener("scroll", checkScroll);

  return (
    <nav>
      <a
        href="#"
        className={activeNav === "#" ? "active" : ""}
        title="Inicio"
      >
        <AiFillHome />
      </a>
      <a
        href="#about"
        className={activeNav === "#about" ? "active" : ""}
        title="Acerca de mi"
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        className={activeNav === "#experience" ? "active" : ""}
        title="Mi experiencia"
      >
        <RiAwardFill />
      </a>
      <a
        href="#projects"
        className={activeNav === "#projects" ? "active" : ""}
        title="Mis proyectos"
      >
        <BiBookAlt />
      </a>
      <a
        href="#testimonials"
        className={activeNav === "#testimonials" ? "active" : ""}
        title="Testimonios"
      >
        <BsPeopleFill />
      </a>
      <a
        href="#contact"
        className={activeNav === "#contact" ? "active" : ""}
        title="Contactame"
      >
        <FiMessageCircle />
      </a>
    </nav>
  );
};

export default Nav;

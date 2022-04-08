import React from "react";
import { useState, useEffect } from "react";
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
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiFillHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <RiAwardFill />
      </a>
      <a
        href="#projects"
        onClick={() => setActiveNav("#projects")}
        className={activeNav === "#projects" ? "active" : ""}
      >
        <BiBookAlt />
      </a>
      <a
        href="#testimonials"
        onClick={() => setActiveNav("#testimonials")}
        className={activeNav === "#testimonials" ? "active" : ""}
      >
        <BsPeopleFill />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <FiMessageCircle />
      </a>
    </nav>
  );
};

export default Nav;

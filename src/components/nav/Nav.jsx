import React from 'react'
import { useState, useEffect } from 'react'
import './nav.css'
import {AiFillHome} from "react-icons/ai"
import {RiAwardFill} from "react-icons/ri"
import {AiOutlineUser} from "react-icons/ai"
import {BiBookAlt} from "react-icons/bi"
import {BsPeopleFill} from "react-icons/bs"
import {FiMessageCircle} from "react-icons/fi"

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav("#")}  className={activeNav === "#" ? "active" : ""}><AiFillHome /></a>
      <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}><AiOutlineUser /></a>
      <a href="#experience" onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ""}><RiAwardFill /></a>
      <a href="#projects" onClick={() => setActiveNav("#projects")} className={activeNav === "#projects" ? "active" : ""}><BiBookAlt /></a>
      <a href="#testimonials" onClick={() => setActiveNav("#testimonials")} className={activeNav === "#testimonials" ? "active" : ""}><BsPeopleFill /></a>
      <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}><FiMessageCircle /></a>
    </nav>
  )
}

export default Nav
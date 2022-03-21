import React from 'react'
import { useState } from 'react'
import './nav.css'
import {AiFillHome} from "react-icons/ai"
import {FcAbout} from "react-icons/fc"
import {GrProjects} from "react-icons/gr"
import {BsPeopleFill} from "react-icons/bs"
import {GrContact} from "react-icons/gr"

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav("#")}  className={activeNav === "#" ? "active" : ""}><AiFillHome /></a>
      <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}><FcAbout /></a>
      <a href="#projects" onClick={() => setActiveNav("#projects")} className={activeNav === "#projects" ? "active" : ""}><GrProjects /></a>
      <a href="#testimonials" onClick={() => setActiveNav("#testimonials")} className={activeNav === "#testimonials" ? "active" : ""}><BsPeopleFill /></a>
      <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}><GrContact /></a>
    </nav>
  )
}

export default Nav
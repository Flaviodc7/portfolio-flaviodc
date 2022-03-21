import React from 'react'
import './nav.css'
import {AiFillHome} from "react-icons/ai"
import {FcAbout} from "react-icons/fc"
import {GrProjects} from "react-icons/gr"
import {BsPeopleFill} from "react-icons/bs"
import {GrContact} from "react-icons/gr"

const Nav = () => {
  return (
    <nav>
      <a href="#"><AiFillHome /></a>
      <a href="#about"><FcAbout /></a>
      <a href="#projects"><GrProjects /></a>
      <a href="#testimonials"><BsPeopleFill /></a>
      <a href="#contact"><GrContact /></a>
    </nav>
  )
}

export default Nav
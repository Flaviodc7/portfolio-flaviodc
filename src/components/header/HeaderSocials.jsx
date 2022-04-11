import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiCodewars } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/flavio-coscarella/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/Flaviodc7"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.codewars.com/users/Flaviodc7"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiCodewars />
      </a>
    </div>
  );
};

export default HeaderSocials;

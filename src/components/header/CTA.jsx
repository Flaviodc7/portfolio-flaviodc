import React from "react";

const CTA = () => {
  return (
    <div className="cta">
      <a
        href="https://drive.google.com/file/d/1e3-lz7RN7zXWZideg3bfQnT02R95wyS5/view?usp=sharing"
        download
        className="btn"
      >
        Descargar CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Contactame
      </a>
    </div>
  );
};

export default CTA;

import React from "react";

const CTA = () => {
  return (
    <div className="cta">
      <a
        href="https://drive.google.com/file/d/1OVK7BsPbOXgrkM_ZX8R34Vf-i7xKQgG2/view?usp=sharing"
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

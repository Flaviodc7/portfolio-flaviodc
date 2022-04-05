import React, { useEffect, useState } from "react";
import "./scrollup.css"

const Scrollup = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  function handleClick(e) {
    e.preventDefault();
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }

  return (
    <div className="scrollUp">
      <a
        id="backToTop"
        href="#"
        data-disable="true"
        className="scrollUp__button"
        onClick={handleClick}
      >
       Ir hacia arriba
      </a>
    </div>
  );
};

export default Scrollup;

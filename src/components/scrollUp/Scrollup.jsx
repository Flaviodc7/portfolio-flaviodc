import React, { useState } from "react";
import "./scrollup.css";
import upButton from "../../assets/up-button.svg"

const Scrollup = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 300) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 300) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <div className="scrollUp">
      <a
        href="#"
        className="scrollUp__button"
        onClick={scrollTop}
        style={{display: showScroll ? 'inline-block' : 'none'}}
      >
        <img className="scrollUp__up" src={upButton}/>
      </a>
    </div>
  );
};

export default Scrollup;

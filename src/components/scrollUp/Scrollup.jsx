import React, { useEffect, useState } from "react";
import "./scrollup.css";

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
      ></a>
    </div>
  );
};

export default Scrollup;

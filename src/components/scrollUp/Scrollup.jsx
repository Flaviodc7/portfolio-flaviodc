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
        <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 24 24"
          className="h-10 w-10"
        >
          <path
            fill="currentColor"
            d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"
          />
        </svg>
        </span>
      </a>
    </div>
  );
};

export default Scrollup;

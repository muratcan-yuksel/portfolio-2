import React from "react";
import Typed from "react-typed";
// snippet rafce
const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <h1>Hello, World!</h1>
        <Typed
          className="typed-text"
          strings={["Web Development", "Web Design", "Tech Writing "]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href="#" className="btn-main-offer">
          Contact me
        </a>
      </div>
    </div>
  );
};

export default Header;

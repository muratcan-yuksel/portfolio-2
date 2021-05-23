import React from "react";
import Typed from "react-typed";
// snippet rafce
const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <h1>Web development</h1>
        <Typed
          className="typed-text"
          strings={["Web Development", "Web Design", "Tech Writing "]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </div>
    </div>
  );
};

export default Header;

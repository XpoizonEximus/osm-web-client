import React from "react";
import "./header.css";

import banner from "../../assets/photos/copertafrontpage.jpg";
import MouseScrollDown from "../../components/mouseScrollDown";

function Header(props) {
  return (
    <header id="header" className="flex column">
      <div className="banner-container flex column">
        <img src={banner} alt="banner" />
      </div>
    </header>
  );
}

export default Header;

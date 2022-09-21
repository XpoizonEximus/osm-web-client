import React from "react";
import "./header.css";

import banner from "../../assets/photos/banner-edited.png";
import MouseScrollDown from "../../components/mouseScrollDown";

function Header(props) {
  return (
    <header id="header" className="flex column">
      <div className="banner-container flex column">
        <img src={banner} alt="banner" />
      </div>
      <h3 className="title flex">ORGANIZAȚIA STUDENȚILOR MEDICINIȘTI DIN CLUJ</h3>
      <div className="headerMouseScrollDown">
        <MouseScrollDown />
      </div>
    </header>
  );
}

export default Header;

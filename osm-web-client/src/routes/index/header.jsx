import React from "react";
import "./header.css";

import banner from "../../assets/photos/banner-edited.png";
import MouseScrollDown from "../../components/mouseScrollDown";

import Navigation from "../../layouts/navigation";

function Header(props) {
  return (
    <header className="index fullscreen">
      <Navigation />
      <div className="index banner">
        <img src={banner} alt="banner" />
      </div>
      <h4 className="index headerText">
        ORGANIZAȚIA STUDENȚILOR MEDICINIȘTI DIN CLUJ
      </h4>
      <div className="index headerMouseScrollDown">
        <MouseScrollDown />
      </div>
    </header>
  );
}

export default Header;

import React from "react";
import "./header.css";

import HeaderCard from "../../components/cards/headerCard";


function Header({children, img, top}) {
  return (
    <header id="header">
      <div className="img-container">
        <img src={img} alt="banner" />
      </div>
      <HeaderCard top={top}>
        {children}
      </HeaderCard>
    </header>
  );
}

export default Header;

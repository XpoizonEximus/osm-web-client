import React from "react";
import "./header.css";

import HeaderCard from "../../components/cards/headerCard";

function Header({ children, img, top }) {
  let card = window.innerWidth > window.innerHeight * 1.5;
  return (
    <header id="header">
      <div className="img-container">
        <img src={img} alt="banner" />
      </div>
      {card ? (
        <HeaderCard top={top}>{children}</HeaderCard>
      ) : (
        <div className="header-card-alt flex column">{children}</div>
      )}
    </header>
  );
}

export default Header;

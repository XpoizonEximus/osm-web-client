import React from "react";
import "./cardPartener.css";

function CardPartener({ banner, nume }) {
  return (
    <div className="cardPartener">
      <img src={banner} alt="" className="banner" />
      <div className="stretcher"></div>
      <p className="nume">{nume}</p>
    </div>
  );
}

export default CardPartener;

import React from "react";
import "./cardEveniment.css";

function CardEveniment({ img, title, description }) {
  return (
    <div className="cardEveniment">
      <img src={img} alt="banner" />
      <div className="container flex column">
        <h4 className="title">{title}</h4>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}

export default CardEveniment;

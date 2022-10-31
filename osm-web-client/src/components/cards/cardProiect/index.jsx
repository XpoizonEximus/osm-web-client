import React from "react";
import { Link } from "react-router-dom";
import "./cardProiect.css";

function CardProiect({
  children,
  title,
  img,
  href,
  hrefTxt = "Află mai multe »",
}) {
  return (
    <div className="cardProiect flex column">
      <div className="img-container flex row">
        <img src={img} alt="img" />
      </div>
      <h5 className="title">{title}</h5>
      <p>{children}</p>
      <Link to={href}>{hrefTxt}</Link>
    </div>
  );
}

export default CardProiect;

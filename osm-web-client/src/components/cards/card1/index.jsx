import React from "react";
import "./card1.css";

function Card1({ children, title, img, href, hrefTxt = "Află mai multe »" }) {
  return (
    <div className="card1">
      <div class="img-container">
        <img src={img} alt="img" />
      </div>
      <h5>{title}</h5>
      <p>{children}</p>
      <a href={href}>{hrefTxt}</a>
    </div>
  );
}

export default Card1;

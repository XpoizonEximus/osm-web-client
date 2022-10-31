import React, { useState } from "react";
import "./cardEveniment.css";

import Button1 from "../../buttons/button1";

function CardEveniment({ img, title, description, href = "/" }) {
  const [allTextVisible, setAllTextVisible] = useState(false);
  return (
    <div className="cardEveniment">
      <img src={img} alt="banner" />
      <div className="container flex column">
        <h4 className="title">{title}</h4>
        <p className={`description ${allTextVisible ? "" : "restrict"}`}>
          {description}
        </p>
        <button
          className="see-more"
          onClick={(e) => {
            setAllTextVisible(!allTextVisible);
          }}
        >
          {allTextVisible ? "Vezi mai puțin" : "Vezi mai mult..."}
        </button>
        <div className="access">
          <Button1 type="a" click={href}>
            Accesează evenimentul »
          </Button1>
        </div>
      </div>
    </div>
  );
}

export default CardEveniment;

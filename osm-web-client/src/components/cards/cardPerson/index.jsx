import React from "react";
import "./cardPerson.css";

function CardPerson({ profil, nume, subtitlu, fields = [] }) {
  return (
    <div className="cardPerson">
      <img src={profil} alt="" className="profil" />
      <h5 className="nume">{nume}</h5>
      <p className="subtitle">{subtitlu}</p>
      {fields?.map((element, index) => (
        <p key={index} className="field">
          {element}
        </p>
      ))}
    </div>
  );
}

export default CardPerson;

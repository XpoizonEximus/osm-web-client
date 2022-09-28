import React from "react";
import { useNavigate } from "react-router-dom";
import "./card3.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot, faCube } from "@fortawesome/free-solid-svg-icons";

function Card3({
  img,
  href = "/",
  title,
  subtitle = "",
  maps = "",
  model3d = "",
}) {
  let navigate = useNavigate();

  return (
    <div to={href} className="card3 flex row" onClick={(e) => navigate(href)}>
      <div className="img-container flex column">
        <img src={img} alt="alt" />
      </div>
      <div className="container flex column">
        <h4 className="flex">{title}</h4>
        <p className="flex">{subtitle}</p>
        <div className="stretcher column"></div>
        <div className="buttons-container flex row">
          {maps !== "" ? (
            <a href={maps}>
              <FontAwesomeIcon icon={faMapLocationDot} />
              {"\u00A0\u00A0\u00A0"}Maps
            </a>
          ) : (
            <></>
          )}
          <div className="stretcher row"></div>
          {model3d !== "" ? (
            <a href={model3d}>
              <FontAwesomeIcon icon={faCube} />
              {"\u00A0\u00A0\u00A0"}3D Model
            </a>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card3;

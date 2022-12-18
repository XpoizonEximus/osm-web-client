import React from "react";
import { useNavigate } from "react-router-dom";
import "./cardAmfiteatru.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot, faCube } from "@fortawesome/free-solid-svg-icons";

function CardAmfiteatru({
  img,
  href = "/",
  title,
  subtitle = "",
  maps = "",
  model3d = "",
}) {
  let navigate = useNavigate();

  return (
    <div
      to={href}
      className="cardAmfiteatru flex"
      onClick={(e) => navigate(href)}
    >
      <div className="img-container flex column">
        <img src={img} alt="alt" />
      </div>
      <div className="container flex column">
        <h4 className="flex">{title}</h4>
        <p className="flex">{subtitle}</p>
        <div className="stretcher column"></div>
        <div className="buttons-container flex row">
          {maps && maps !== "" ? (
            <a href={maps}>
              <FontAwesomeIcon icon={faMapLocationDot} />{" "}
              <div style={{ padding: "2px" }}>Maps</div>
            </a>
          ) : (
            <></>
          )}
          {model3d && model3d !== "" && maps && maps !== "" ? (
            <div className="stretcher row"></div>
          ) : (
            <></>
          )}
          {model3d && model3d !== "" ? (
            <a href={model3d}>
              <FontAwesomeIcon icon={faCube} />{" "}
              <div style={{ padding: "2px" }}>3D Model</div>
            </a>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default CardAmfiteatru;

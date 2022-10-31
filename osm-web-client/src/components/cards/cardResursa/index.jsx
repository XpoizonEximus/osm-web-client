import React from "react";
import { Link } from "react-router-dom";
import "./cardResursa.css";

import { PATH } from "../../../const/const";

function CardResursa({ title, icon, href = "/" }) {
  return (
    <Link to={href} className="cardResursa flex row">
      <h5 className="title flex row">
        <div className="icon-container">{icon}</div>
        {title}
      </h5>
    </Link>
  );
}

export default CardResursa;

export function CardResursaRedirect({ title, icon, href = PATH.index }) {
  return (
    <a href={href} className="cardResursa flex row">
      <h5 className="title flex row">
        <div className="icon-container">{icon}</div>
        {title}
      </h5>
    </a>
  );
}

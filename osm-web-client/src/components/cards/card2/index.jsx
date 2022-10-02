import React from "react";
import { Link } from "react-router-dom";
import "./card2.css";

import { PATH } from "../../../const/const";

function Card2({ title, icon, href = "/" }) {
  return (
    <Link to={href} className="card2 flex row">
      <h5 className="title flex row">
        <div className="icon-container">{icon}</div>
        {title}
      </h5>
    </Link>
  );
}

export default Card2;

export function Card2Redirect({ title, icon, href = PATH.index }) {
  return (
    <a href={href} className="card2 flex row">
      <h5 className="title flex row">
        <div className="icon-container">{icon}</div>
        {title}
      </h5>
    </a>
  );
}

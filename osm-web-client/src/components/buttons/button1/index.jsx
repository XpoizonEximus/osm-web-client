import React from "react";
import { Link } from "react-router-dom";
import "./button1.css";

function Button1({ children, type = "link", click = "" }) {
  return type === "link" ? (
    <Link to={click} className="link-button-1">
      {children}
    </Link>
  ) : type === "button" ? (
    <button onClick={click} className="link-button-1">
      {children}
    </button>
  ) : (
    <></>
  );
}

export default Button1;

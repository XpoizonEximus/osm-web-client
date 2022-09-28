import React from "react";
import { NavLink } from "react-router-dom";
import "./navigationLink.css";

function NavigationLink({
  href = "/",
  children = "Link",
  padding = "10px",
  highlight = false,
}) {
  return (
    <NavLink
      to={href}
      style={{ paddingLeft: padding, paddingRight: padding }}
      className={
        highlight ? "navigation-link flex highlight" : "navigation-link flex"
      }
    >
      {children}
    </NavLink>
  );
}

export default NavigationLink;

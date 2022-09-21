import React from "react";
import "./navigationLink.css";

function NavigationLink({ link = "/", children = "Link", padding = "10px" }) {
  return (
    <a
      href={link}
      style={{ paddingLeft: padding, paddingRight: padding }}
      className="navigation-link flex"
    >
      {children}
    </a>
  );
}

export default NavigationLink;

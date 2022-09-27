import React from "react";
import "./navigationLink.css";

function NavigationLink({
  link = "/",
  children = "Link",
  padding = "10px",
  highlight = false,
}) {
  return (
    <a
      href={link}
      style={{ paddingLeft: padding, paddingRight: padding }}
      className={highlight?"navigation-link flex highlight":"navigation-link flex"}
    >
      {children}
    </a>
  );
}

export default NavigationLink;

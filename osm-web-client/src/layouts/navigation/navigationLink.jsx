import React from "react";
import "./navigationLink.css";

function NavigationLink({ link = "/", children = "Link", padding = "10px" }) {
  return (
    <a
      href={link}
      style={{ paddingLeft: padding, paddingRight: padding }}
      class="navigationLink"
    >
      <div>{children}</div>
    </a>
  );
}

export default NavigationLink;

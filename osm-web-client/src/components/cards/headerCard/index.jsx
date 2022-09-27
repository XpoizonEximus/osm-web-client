import React from "react";
import "./headerCard.css";

function HeaderCard({ children, className = "", top = 0 }) {
  return (
    <div
      className={"header-card ".concat(className)}
      style={{ top: `${top + 150}px` }}
    >
      {children}
    </div>
  );
}

export default HeaderCard;

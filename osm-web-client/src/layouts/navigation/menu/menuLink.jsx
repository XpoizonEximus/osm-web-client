import React from "react";
import "./menuLink.css";

function MenuLink({ title = "", href = "/", children }) {
  return (
    <li>
      <a href={href} className="flex row">
        <div className="title">{title}</div>
        {typeof children != typeof undefined && children.count > 0 ? (
          <div className="guillets">»</div>
        ) : (
          <></>
        )}
      </a>
    </li>
  );
}

export default MenuLink;

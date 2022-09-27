import React from "react";
import { Link } from "react-router-dom";
import "./menuLink.css";

function MenuLink({ title = "", icon, href = "/", top = 0, children }) {
  return (
    <li className={title}>
      <Link to={href} className="flex row">
        <div className="title">
          <span className="icon-container">{icon}</span>
          {title}
        </div>
        {typeof children != typeof undefined && children.length > 0 ? (
          <div className="guillets">»</div>
        ) : (
          <></>
        )}
        {typeof children != typeof undefined && children.length > 0 ? (
          <div
            className="list"
            style={{
              top: `${top}px`,
            }}
          >
            <ul className="list-container">
              <br />
              {children}
              <br />
            </ul>
          </div>
        ) : (
          <></>
        )}
      </Link>
    </li>
  );
}

export default MenuLink;

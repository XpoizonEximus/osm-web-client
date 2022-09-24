import React, { useState, useEffect, useRef } from "react";
import "./menuLink.css";

function MenuLink({ title = "", href = "/", children }) {
  const pos = useRef();
  const [position, setPosition] = useState(20);

  useEffect(() => {
    setPosition(pos.current.offsetTop);
  }, [pos]);

  return (
    <li className={title} ref={pos}>
      <a href={href} className="flex row">
        <div className="title">{title}</div>
        {typeof children != typeof undefined && children.length > 0 ? (
          <div className="guillets">»</div>
        ) : (
          <></>
        )}
        {typeof children != typeof undefined && children.length > 0 ? (
          <div
            className="list"
            style={{
              top: position + 5,
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
      </a>
    </li>
  );
}

export default MenuLink;

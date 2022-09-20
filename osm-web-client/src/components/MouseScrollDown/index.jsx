import React from "react";
import "./mouseScrollDown.css";

function MouseScrollDown({ color }) {
  return (
    <div className="scrolldown">
      <div className="chevrons">
        <div className="chevrondown"></div>
        <div className="chevrondown"></div>
      </div>
    </div>
  );
}

export default MouseScrollDown;

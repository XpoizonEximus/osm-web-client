import React from "react";
import "./header.css";

import useWindowDimensions from "../../api/hooks/useWindowDimensions";
import MouseScrollDown from "../../components/mouseScrollDown";

function Header({ children, img, top, scrollIcon = true }) {
  const { width, height } = useWindowDimensions();
  return (
    <header id="header">
      <div className="img-container">
        <img src={img} alt="banner" />
        {width > height * 1.5 ? (
          <div className="img-overlay flex column" top={top}>
            {children}
            {scrollIcon ? <MouseScrollDown /> : <></>}
          </div>
        ) : (
          <></>
        )}
      </div>
      {width > height * 1.5 ? (
        <></>
      ) : (
        <div className="img-overlay-alt flex column">{children}</div>
      )}
    </header>
  );
}

export default Header;

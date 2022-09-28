import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navigation.css";

import NavigationLink from "./navigationLink";
import Menu from "./menu/";

import logo from "../../assets/photos/banner-edited.png";
import menuLogo from "../../assets/photos/menu-logo.png";

import { PATH } from "../../const/const";

function Navigation(props) {
  const [isMenuVisible, setMenuVisibility] = useState(false);

  return (
    <div id="navigation">
      <Menu isVisible={isMenuVisible} setVisibility={setMenuVisibility} />
      <div className="container flex row">
        <Link to="/">
          <div className="logo-container flex">
            <img src={logo} alt="logo" />
          </div>
        </Link>
        <div
          className="menu-icon-container flex"
          onMouseEnter={(e) => {
            setMenuVisibility(true);
          }}
          onMouseLeave={(e) => {
            setMenuVisibility(false);
          }}
        >
          <img src={menuLogo} alt="logo" />
        </div>
        <div className="links-container flex row">
          <NavigationLink
            padding="50px"
            href={PATH.evenimente.index}
            highlight={true}
          >
            Evenimente
          </NavigationLink>
          <NavigationLink padding="50px" href={PATH.resurse.index}>
            Resurse
          </NavigationLink>
          <NavigationLink padding="50px" href={PATH.proiecte.index}>
            Proiecte
          </NavigationLink>
          <NavigationLink padding="50px" href={PATH.shop.index}>
            Shop
          </NavigationLink>
          <NavigationLink padding="50px" href={PATH.contact.index}>
            Contact
          </NavigationLink>
        </div>
      </div>
    </div>
  );
}

export default Navigation;

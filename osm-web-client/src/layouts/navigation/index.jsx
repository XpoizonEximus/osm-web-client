import React from "react";
import "./navigation.css";

import NavigationLink from "./navigationLink";
import logo from "../../assets/photos/banner-edited.png";

function Navigation(props) {
  return (
    <div id="navigation">
      <div className="container flex row">
        <div className="logo-container flex">
          <img src={logo} alt="logo" />
        </div>
        <div className="links-container flex row">
          <NavigationLink padding="50px">Proiecte</NavigationLink>
          <NavigationLink padding="50px">Evenimente</NavigationLink>
          <NavigationLink padding="50px">Magazin Online</NavigationLink>
          <NavigationLink padding="50px">Contact</NavigationLink>
        </div>
        <div class="auth-container flex row">Autentificare</div>
      </div>
    </div>
  );
}

export default Navigation;

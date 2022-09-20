import React from "react";
import "./navigation.css";

import NavigationLink from "./navigationLink";
import logo from "../../assets/photos/banner-edited.png";

function Navigation(props) {
  return (
    <div class="navigation sticky">
      <div class="navigation container">
        <div class="navigation logo container">
          <img src={logo} class="logo" alt="logo" />
        </div>
        <div class="navigation links container">
          <NavigationLink padding="50px">Proiecte</NavigationLink>
          <NavigationLink padding="50px">Evenimente</NavigationLink>
          <NavigationLink padding="50px">Magazin Online</NavigationLink>
          <NavigationLink padding="50px">Contact</NavigationLink>
        </div>
        <div class="navigation auth container">Autentificare</div>
      </div>
    </div>
  );
}

export default Navigation;

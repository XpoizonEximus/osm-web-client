import React from "react";
import "./menu.css";

import MenuLink from "./menuLink";

function Menu({ isVisible }) {
  return (
    <div className={isVisible ? "menu expanded" : "menu colapsed"}>
      <ul className="menu-dropdown flex column">
        <MenuLink title="Proiecte" />
        <MenuLink title="Evenimente" />
        <hr />
        <MenuLink title="Magazin Online" />
        <hr />
        <MenuLink title="Calculator Medie" />
        <MenuLink title="Site UMF" href="http://www.umfcluj.ro/" />
        <MenuLink title="Site Info-stud" />
        <hr />
        <MenuLink title="Echipa" />
        <MenuLink title="Parteneri și Sponsori" />
        <hr />
        <MenuLink title="Regulamente și Ghiduri" />
        <MenuLink title="FAQ" />
        <MenuLink title="Contact" />
      </ul>
    </div>
  );
}

export default Menu;

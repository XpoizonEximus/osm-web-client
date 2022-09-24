import React from "react";
import "./menu.css";

import MenuLink from "./menuLink";

function Menu({ isVisible, setVisibility }) {
  return (
    <div
      className={isVisible ? "menu expanded" : "menu colapsed"}
      onMouseEnter={(e) => {
        setVisibility(true);
      }}
      onMouseLeave={(e) => {
        setVisibility(false);
      }}
    >
      <ul className="menu-dropdown flex column list-container">
        <MenuLink title="Proiecte">
          <MenuLink title="Tutori pentru noua generație" />
          <MenuLink title="MEDSTIC - Trupa de teatru a facultăţii" />
          <MenuLink title="Teddy Bear Hospital" />
          <MenuLink title="Disaster Medicine Preparedness" />
          <MenuLink title="Zilele Educaţiei Medicale" />
          <MenuLink title="Artistic Anatomy" />
          <MenuLink title="Medici pentru tine" />
          <MenuLink title="CORD – Clubul de Oratorie, Retorică şi Dezbateri" />
          <MenuLink title="Văd Voci – Breaking the Silence" />
          <MenuLink title="Twinning Project" />
          <MenuLink title="3S – SCORA" />
          <MenuLink title="Sănătate în paşi de dans" />
          <MenuLink title="Medstrings Orchestra" />
          <MenuLink title="Sport pentru Sănătate" />
          <MenuLink title="Cenaclul MedFolk" />
          <MenuLink title="Donează sânge, fii erou!" />
          <MenuLink title="Road Safety" />
          <MenuLink title="Schimburi internaţionale" />
          <MenuLink title="Micii sanitari" />
          <MenuLink title="HEART" />
          <MenuLink title="Medical Research Education" />
          <MenuLink title="Medicalis" />
          <MenuLink title="Focul viu" />
          <MenuLink title="Transmed" />
          <MenuLink title="Împreună pentru sănătate" />
        </MenuLink>
        <MenuLink title="Evenimente" />
        <hr />
        <MenuLink title="Magazin Online" />
        <hr />
        <MenuLink title="Site UMF" href="http://www.umfcluj.ro/" />
        <MenuLink title="Site Info-stud" />
        <MenuLink title="Ghiduri">
          <MenuLink title="Erasmus" />
          <MenuLink title="Licență" />
        </MenuLink>
        <MenuLink title="Regulamente">
          <MenuLink title="OSM" />
          <MenuLink title="Deplasări externe" />
        </MenuLink>
        <MenuLink title="Calculator medie" />
        <MenuLink title="Amfiteatre și săli" />
        <MenuLink title="FAQ" />
        <hr />
        <MenuLink title="Echipa" />
        <MenuLink title="Parteneri și Sponsori" />
        <hr />
        <MenuLink title="Contact" />
      </ul>
    </div>
  );
}

export default Menu;

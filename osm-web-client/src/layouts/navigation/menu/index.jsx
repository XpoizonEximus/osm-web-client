import React from "react";
import "./menu.css";

import MenuLink from "./menuLink";
import * as Icons from "../../../const/icons"

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
        <MenuLink title="Evenimente" icon={Icons.EvenimenteIcon}/>
        <MenuLink title="Proiecte" icon={Icons.ProiecteIcon} top={77}>
          <MenuLink title="Tutori pentru noua generație"/>
          <MenuLink title="MEDSTIC - Trupa de teatru a facultăţii" />
          <MenuLink title="Teddy Bear Hospital" />
          <MenuLink title="Disaster Medicine Preparedness"/>
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
        <MenuLink title="Shop" icon={Icons.ShopIcon} />
        <hr />
        <MenuLink title="FAQ" icon={Icons.FaqIcon} />
        <MenuLink title="Ghiduri" icon={Icons.GhiduriIcon} top={180}>
          <MenuLink title="Ghidul Bobocului" icon={Icons.GhiduriIcon} />
          <MenuLink title="Erasmus" icon={Icons.GhiduriIcon} />
          <MenuLink title="Licență" icon={Icons.GhiduriIcon} />
        </MenuLink>
        <MenuLink title="Regulamente" icon={Icons.RegulamenteIcon} top={208}>
          <MenuLink title="OSM" icon={Icons.RegulamenteIcon} />
          <MenuLink title="Deplasări externe" icon={Icons.RegulamenteIcon} />
        </MenuLink>
        <MenuLink title="Calculator medie" icon={Icons.CalculatorMedieIcon} />
        <MenuLink title="Amfiteatre și săli" icon={Icons.AmfiteatreSaliIcon} />
        <MenuLink title="Site Emsys Info-stud" icon={Icons.LinksIcon} />
        <MenuLink title="Legături externe" icon={Icons.LinksIcon}>
          <MenuLink title="Site UMF" icon={Icons.LinksIcon} href="/" />
        </MenuLink>
        <hr />
        <MenuLink title="Parteneri și Sponsori" icon={Icons.ParteneriIcon} />
        <MenuLink title="Echipa" icon={Icons.EchipaIcon} />
        <MenuLink title="Contact" icon={Icons.ContactIcon} />
      </ul>
    </div>
  );
}

export default Menu;

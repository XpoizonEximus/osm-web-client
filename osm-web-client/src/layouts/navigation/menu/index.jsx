import React from "react";
import "./menu.css";

import MenuLink from "./menuLink";
import * as Icons from "../../../const/icons";

import { PATH, LINKS } from "../../../const/const";

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
        <MenuLink
          title="Evenimente"
          icon={Icons.EvenimenteIcon}
          href={PATH.evenimente.index}
        />
        <MenuLink
          title="Proiecte"
          icon={Icons.ProiecteIcon}
          href={PATH.proiecte.index}
          top={77}
        >
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
        <MenuLink title="Shop" icon={Icons.ShopIcon} href={PATH.shop.index} />
        <hr />
        <MenuLink
          title="FAQ"
          icon={Icons.FaqIcon}
          href={PATH.resurse.faq.index}
        />
        <MenuLink
          title="Ghiduri"
          icon={Icons.GhiduriIcon}
          href={PATH.resurse.ghiduri.index}
          top={180}
        >
          <MenuLink title="Ghidul Bobocului" icon={Icons.GhiduriIcon} />
          <MenuLink title="Erasmus" icon={Icons.GhiduriIcon} />
          <MenuLink title="Licență" icon={Icons.GhiduriIcon} />
        </MenuLink>
        <MenuLink
          title="Regulamente"
          icon={Icons.RegulamenteIcon}
          href={PATH.resurse.regulamente.index}
          top={208}
        >
          <MenuLink title="Carta universității" icon={Icons.RegulamenteIcon} />
          <MenuLink title="OSM" icon={Icons.RegulamenteIcon} />
          <MenuLink title="Deplasări externe" icon={Icons.RegulamenteIcon} />
        </MenuLink>
        <MenuLink
          title="Calculator medie"
          icon={Icons.CalculatorMedieIcon}
          href={PATH.resurse.calculatorMedie.index}
        />
        <MenuLink
          title="Amfiteatre și săli"
          icon={Icons.AmfiteatreSaliIcon}
          href={PATH.resurse.amfiteatreSali.index}
        />
        <MenuLink title="Site Emsys Info-stud" icon={Icons.LinksIcon} />
        <MenuLink
          title="Legături externe"
          icon={Icons.LinksIcon}
          href={PATH.resurse.legaturiExterne.index}
          top={320}
        >
          <MenuLink title="Site UMF" icon={Icons.LinksIcon} />
        </MenuLink>
        <hr />
        <MenuLink
          title="Parteneri și Sponsori"
          icon={Icons.ParteneriIcon}
          href={PATH.parteneri.index}
        />
        <MenuLink
          title="Echipa"
          icon={Icons.EchipaIcon}
          href={PATH.echipa.index}
        />
        <MenuLink
          title="Contact"
          icon={Icons.ContactIcon}
          href={PATH.contact.index}
        />
      </ul>
    </div>
  );
}

export default Menu;

import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./menu.css";

import MenuLink, { MenuLinkRedirect } from "./menuLink";
import * as Icons from "../../../const/icons";

import { PATH, LINKS } from "../../../const/const";

function Menu({ isVisible, setVisibility }) {
  const location = useLocation();
  useEffect(() => {
    setVisibility(false);
  }, [location, setVisibility]);

  return (
    <div
      className={isVisible ? "nav-menu expanded" : "nav-menu colapsed"}
      onMouseEnter={(e) => {
        setVisibility(true);
      }}
      onMouseLeave={(e) => {
        setVisibility(false);
      }}
    >
      <ul
        className="nav-menu-dropdown list-container flex column"
        onClick={() => setVisibility(false)}
      >
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
        </MenuLink>
        <MenuLink
          title="Regulamente"
          icon={Icons.RegulamenteIcon}
          href={PATH.resurse.regulamente.index}
          top={208}
        >
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
        <MenuLinkRedirect
          title="EMSYS"
          icon={Icons.EmsysIcon}
          href={LINKS.emsys}
        />
        <MenuLink
          title="Legături externe"
          icon={Icons.LinksIcon}
          href={PATH.resurse.legaturiExterne.index}
          top={320}
        >
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

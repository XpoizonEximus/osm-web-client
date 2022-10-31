import React, { useRef } from "react";
import "./regulamente.css";

import Header from "../../../layouts/header";
import banner from "../../../assets/photos/rules-banner.png";
import CardResursa from "../../../components/cards/cardResursa";
import { RegulamenteIcon } from "../../../const/icons";

function RegulamentePage() {
  window.scrollTo(0, 0);
  const regulamenteContent = useRef(null);

  return (
    <div id="regulamente">
      <Header img={banner} top={150}>
        <h1 className="title">Regulamente</h1>
        <p>Regulile care se aplică oricărui student, în UMF cât și în OSM.</p>
        <br />
        <br />
      </Header>
      <section id="content" className="main" ref={regulamenteContent}>
        <div className="content">
          <CardResursa title="OSM" icon={RegulamenteIcon} />
          <CardResursa title="Deplasări externe" icon={RegulamenteIcon} />
          <CardResursa title="Carta Universității" icon={RegulamenteIcon} />
        </div>
      </section>
    </div>
  );
}

export default RegulamentePage;

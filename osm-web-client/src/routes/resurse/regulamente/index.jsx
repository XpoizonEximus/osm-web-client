import React, { useRef } from "react";
import "./regulamente.css";

import Header from "../../../layouts/header";
import banner from "../../../assets/photos/rules-banner.png";
import Button1 from "../../../components/buttons/button1";
import Card2 from "../../../components/cards/card2";
import { RegulamenteIcon } from "../../../const/icons";

function RegulamentePage() {
  const regulamenteContent = useRef(null);

  return (
    <div id="regulamente">
      <Header img={banner} top={150}>
        <h1 className="title">Regulamente</h1>
        <p>Regulile care se aplică oricărui student, în UMF cât și în OSM.</p>
        <br />
        <br />
        <Button1
          type="button"
          click={(e) => {
            regulamenteContent.current.scrollIntoView();
          }}
        >
          Vezi toate regulamentele »
        </Button1>
      </Header>
      <section id="content" className="main" ref={regulamenteContent}>
        <div className="content">
          <Card2 title="OSM" icon={RegulamenteIcon} />
          <Card2 title="Deplasări externe" icon={RegulamenteIcon} />
          <Card2 title="Carta Universității" icon={RegulamenteIcon} />
        </div>
      </section>
    </div>
  );
}

export default RegulamentePage;

import React, { useRef } from "react";
import "./resurse.css";

import Header from "../../layouts/header";
import banner from "../../assets/photos/resources-banner.png";
import LinkButton1 from "../../components/buttons/linkButton1";
import Card2 from "../../components/cards/card2";
import * as Icons from "../../const/icons";

function ResursePage() {
  const resurseContent = useRef(null);

  return (
    <div id="resurse">
      <Header img={banner} top={150}>
        <h1 className="title">Resurse</h1>
        <p className="subtitle">Pentru a face studenția mai ușoară.</p>
        <p>
          Regulamente, ghiduri și alte unelte indispensabile unui student la
          UMFIH.
        </p>
        <br />
        <br />
        <LinkButton1 type="button" click={(e) => {resurseContent.current.scrollIntoView();console.log("here");}}>
          Vezi toate resursele »
        </LinkButton1>
      </Header>
      <section id="content" className="main" ref={resurseContent}>
        <div className="content">
          <Card2 title="FAQ" icon={Icons.FaqIcon} />
          <Card2 title="GHiduri" icon={Icons.GhiduriIcon} />
          <Card2 title="Regulamente" icon={Icons.RegulamenteIcon} />
          <Card2 title="Calculator medie" icon={Icons.CalculatorMedieIcon} />
          <Card2 title="Amfiteatre și săli" icon={Icons.AmfiteatreSaliIcon} />
          <Card2 title="Emsys Info-stud" icon={Icons.LinksIcon} />
          <Card2 title="Legături externe" icon={Icons.LinksIcon} />
        </div>
      </section>
    </div>
  );
}

export default ResursePage;

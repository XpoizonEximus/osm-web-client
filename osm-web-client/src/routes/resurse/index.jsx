import React, { useRef } from "react";
import "./resurse.css";

import Header from "../../layouts/header";
import banner from "../../assets/photos/resources-banner.jpg";
import Button1 from "../../components/buttons/button1";
import Card2, { Card2Redirect } from "../../components/cards/card2";
import * as Icons from "../../const/icons";

import { LINKS, PATH } from "../../const/const";

function ResursePage() {
  window.scrollTo(0, 0);
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
        <Button1
          type="button"
          click={(e) => {
            resurseContent.current.scrollIntoView();
          }}
        >
          Vezi toate resursele »
        </Button1>
      </Header>
      <section id="content" className="main" ref={resurseContent}>
        <div className="content">
          <Card2
            title="FAQ"
            icon={Icons.FaqIcon}
            href={"/".concat(PATH.resurse.faq.index)}
          />
          <Card2
            title="Ghiduri"
            icon={Icons.GhiduriIcon}
            href={"/".concat(PATH.resurse.ghiduri.index)}
          />
          <Card2
            title="Regulamente"
            icon={Icons.RegulamenteIcon}
            href={"/".concat(PATH.resurse.regulamente.index)}
          />
          <Card2
            title="Calculator medie"
            icon={Icons.CalculatorMedieIcon}
            href={"/".concat(PATH.resurse.calculatorMedie.index)}
          />
          <Card2
            title="Amfiteatre și săli"
            icon={Icons.AmfiteatreSaliIcon}
            href={"/".concat(PATH.resurse.amfiteatreSali.index)}
          />
          <Card2Redirect
            title="Emsys Info-stud"
            icon={Icons.LinksIcon}
            href={LINKS.emsys}
          />
          <Card2
            title="Legături externe"
            icon={Icons.LinksIcon}
            href={"/".concat(PATH.resurse.legaturiExterne.index)}
          />
        </div>
      </section>
    </div>
  );
}

export default ResursePage;

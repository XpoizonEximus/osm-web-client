import React, { useRef, useEffect } from "react";
import "./resurse.css";

import Header from "../../layouts/header";
import banner from "../../assets/photos/resources-banner.jpg";
import CardResursa, {
  CardResursaRedirect,
} from "../../components/cards/cardResursa";
import * as Icons from "../../const/icons";

import { LINKS, PATH } from "../../const/const";

function ResursePage() {
  useEffect(() => window.scrollTo(0, 0), []);
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
      </Header>
      <section id="content" className="main" ref={resurseContent}>
        <div className="content">
          <CardResursa
            title="FAQ"
            icon={Icons.FaqIcon}
            href={"/".concat(PATH.resurse.faq.index)}
          />
          <CardResursa
            title="Ghiduri"
            icon={Icons.GhiduriIcon}
            href={"/".concat(PATH.resurse.ghiduri.index)}
          />
          <CardResursa
            title="Regulamente"
            icon={Icons.RegulamenteIcon}
            href={"/".concat(PATH.resurse.regulamente.index)}
          />
          <CardResursa
            title="Rapoartele reprezentanților"
            icon={Icons.RegulamenteIcon}
            href={"/".concat(PATH.resurse.rapoarte.index)}
          />
          <CardResursa
            title="Calculator medie"
            icon={Icons.CalculatorMedieIcon}
            href={"/".concat(PATH.resurse.calculatorMedie.index)}
          />
          <CardResursa
            title="Amfiteatre și săli"
            icon={Icons.AmfiteatreSaliIcon}
            href={"/".concat(PATH.resurse.amfiteatreSali.index)}
          />
          <CardResursaRedirect
            title="Catalog Emsys"
            icon={Icons.LinksIcon}
            href={LINKS.emsys}
          />
          <CardResursaRedirect
            title="Platforma cereri UMF"
            icon={Icons.LinksIcon}
            href={LINKS.cereri}
          />
          <CardResursa
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

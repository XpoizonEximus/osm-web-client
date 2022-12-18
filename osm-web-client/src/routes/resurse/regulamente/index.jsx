import React, { useRef } from "react";
import "./regulamente.css";

import Header from "../../../layouts/header";
import banner from "../../../assets/photos/rules-banner.png";
import { CardResursaRedirect } from "../../../components/cards/cardResursa";
import { RegulamenteIcon } from "../../../const/icons";
import useRegulamente from "../../.././api/hooks/axios/regulamente";
import { useEffect } from "react";

function RegulamentePage() {
  useEffect(() => window.scrollTo(0, 0), []);
  const regulamenteContent = useRef(null);
  const data = useRegulamente();

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
          {data?.map((element, index) => {
            return (
              <CardResursaRedirect
                key={index}
                title={element?.descr}
                icon={RegulamenteIcon}
                href={element?.file_path}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default RegulamentePage;

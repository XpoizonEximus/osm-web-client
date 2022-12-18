import React from "react";
import "./rapoarte.css";

import Header from "../../../layouts/header";
import banner from "../../../assets/photos/reports-banner.jpg";
import { CardResursaRedirect } from "../../../components/cards/cardResursa";
import { GhiduriIcon } from "../../../const/icons";
import useRapoarte from "../../../api/hooks/axios/rapoarte";
import { useEffect } from "react";

function RapoartePage() {
  useEffect(() => window.scrollTo(0, 0), []);
  const data = useRapoarte();

  return (
    <div id="rapoarte">
      <Header img={banner} top={0}>
        <h1
          className="title"
          style={{ alignItems: "center", textAlign: "center" }}
        >
          Rapoartele reprezentanților
        </h1>
        <p className="subtitle">Comunicatele oficiale ale facultății</p>
      </Header>
      <section id="content" className="main">
        <div className="content">
          {data?.map((element, index) => {
            return (
              <CardResursaRedirect
                key={index}
                title={element?.descr}
                icon={GhiduriIcon}
                href={element?.file_path}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default RapoartePage;

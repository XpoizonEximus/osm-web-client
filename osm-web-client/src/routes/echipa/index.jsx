import React, { useEffect } from "react";
import "./echipa.css";
import useEchipa from "../../api/hooks/axios/echipa";

import Header from "../../layouts/header";
import banner from "../../assets/photos/echipa_banner.jpg";
import CardPerson from "../../components/cards/cardPerson";
import { useParams } from "react-router-dom";
import { useRef } from "react";

import { PATH } from "../../const/const";

function EchipaPage() {
  useEffect(() => window.scrollTo(0, 0), []);
  const data = useEchipa();

  const url = useParams();
  const cd = useRef();
  const reprezentanti = useRef();
  const coordonatori = useRef();

  useEffect(() => {
    switch (url?.id) {
      case PATH.echipa.cd:
        window.scrollTo(0, cd.current.offsetTop - 50);
        break;
      case PATH.echipa.reprezentanti:
        window.scrollTo(0, reprezentanti.current.offsetTop - 50);
        break;
      case PATH.echipa.coordonatori:
        window.scrollTo(0, coordonatori.current.offsetTop - 50);
        break;
      default:
        break;
    }
  }, [url, data]);

  return (
    <div id="echipa">
      <Header img={banner} top={150}>
        <h1 className="title">Echipa OSM</h1>
      </Header>
      <div className="main">
        <section id="cd" ref={cd}>
          <h3>Consiliul director</h3>
          <div className="content flex column">
            <div className="grid-container flex">
              {data?.cd?.map((e, i) => {
                return (
                  <CardPerson
                    key={i}
                    profil={e?.img_path}
                    nume={e?.name_full}
                    subtitlu={e?.role}
                    fields={[e?.email, e?.phone]}
                  />
                );
              })}
            </div>
          </div>
        </section>
        <hr />
        <section id="coordonatori" ref={coordonatori}>
          <h3>Coordonatori de proiecte și ofițeri locali</h3>
          <div className="content flex column">
            <div className="grid-container flex">
              {data?.coordonatori?.map((e, i) => {
                return (
                  <CardPerson
                    key={i}
                    profil={e?.img_path}
                    nume={e?.name_full}
                    subtitlu={e?.role}
                    fields={[e?.email, e?.phone]}
                  />
                );
              })}
            </div>
          </div>
          <hr />
        </section>
        <section id="reprezentanti" ref={reprezentanti}>
          <h3>Reprezentanți de an</h3>
          <div className="content flex column">
            <div className="grid-container flex">
              {data?.reprezentanti?.map((e, i) => {
                return (
                  <CardPerson
                    key={i}
                    profil={e?.img_path}
                    nume={e?.name_full}
                    subtitlu={e?.role}
                    fields={[e?.email, e?.phone]}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default EchipaPage;

import React, { useRef } from "react";
import "./ghiduri.css";

import Header from "../../../layouts/header";
import banner from "../../../assets/photos/guides-banner.jpg";
import Button1 from "../../../components/buttons/button1";
import Card2 from "../../../components/cards/card2";
import { GhiduriIcon } from "../../../const/icons";

import ghidErasmus from "../../../assets/files/Ghid ERASMUS.pdf";

function GhiduriPage() {
  window.scrollTo(0, 0);
  const ghiduriContent = useRef(null);

  const [setErasmus] = React.useState();
  fetch(ghidErasmus)
    .then((response) => response.text())
    .then((textContent) => {
      setErasmus(textContent);
    });
  return (
    <div id="ghiduri">
      <Header img={banner} top={0}>
        <h1 className="title">Ghiduri</h1>
        <p className="subtitle">Explicații pas cu pas</p>
        <p>
          Află de la cei cu experiență tot ce trebuie să știi despre facultate.
        </p>
        <br />
        <br />
        <Button1
          type="button"
          click={(e) => {
            ghiduriContent.current.scrollIntoView();
          }}
        >
          Vezi toate ghidurile »
        </Button1>
      </Header>
      <section id="content" className="main" ref={ghiduriContent}>
        <div className="content">
          <Card2 title="Bobocul în OSM" icon={GhiduriIcon} />
          <Card2 title="Erasmus" icon={GhiduriIcon} />
          <Card2 title="Licență" icon={GhiduriIcon} />
        </div>
      </section>
    </div>
  );
}

export default GhiduriPage;

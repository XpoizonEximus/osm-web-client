import React, { useRef, useEffect } from "react";
import "./proiecte.css";

import Header from "../../layouts/header";
import banner from "../../assets/photos/proiecte-banner.jpg";
import Button1 from "../../components/buttons/button1";
import CardProiect from "../../components/cards/cardProiect";

import { useProiecteSumarry } from "../../api/hooks/axios/proiecte";

function ProiectePage() {
  useEffect(() => window.scrollTo(0, 0), []);
  const proiecteContent = useRef(null);
  const proiecte = useProiecteSumarry();

  return (
    <div id="proiecte">
      <Header img={banner} top={150}>
        <h1 className="title">Proiecte</h1>
        <p className="subtitle">
          Inițiative care aduc un plus orașului și societății.
        </p>
        <br />
        <br />
        <Button1
          type="button"
          click={(e) => {
            proiecteContent.current.scrollIntoView();
          }}
        >
          Vezi toate proiectele »
        </Button1>
      </Header>
      <div className="main" ref={proiecteContent}>
        <div className="content flex column">
          <div className="grid-container flex">
            {proiecte?.map((proiect, i) => {
              return (
                <CardProiect
                  key={i}
                  img={proiect.img_path}
                  title={proiect.name}
                  href={proiect.id}
                >
                  {proiect.description}
                </CardProiect>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProiectePage;

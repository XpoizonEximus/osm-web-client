import React, { useState, useEffect } from "react";
import "./proiecte.css";

import Header from "../../layouts/header";
import banner from "../../assets/photos/proiecte-banner.jpg";
import SearchBox from "../../components/searchBox";
import CardProiect from "../../components/cards/cardProiect";

import { useProiecte } from "../../api/hooks/axios/proiecte";

function ProiectePage() {
  useEffect(() => window.scrollTo(0, 0), []);
  const [src, setSrc] = useState();
  const data = useProiecte(src);
  return (
    <div id="proiecte">
      <Header img={banner} top={150} scrollIcon={false}>
        <h1 className="title">Proiecte</h1>
        <p className="subtitle">
          Inițiative care aduc un plus orașului și societății.
        </p>
        <br />
        <br />
        <SearchBox
          placeholder="Caută proiecte..."
          textSetter={setSrc}
        />
      </Header>
      <div className="main">
        <div className="content flex column">
          <div className="grid-container flex">
            {data?.map ? (
              data?.map((proiect, i) => {
                return (
                  <CardProiect
                    key={proiect.id}
                    img={proiect.img_path}
                    title={proiect.title}
                    href={proiect.name}
                  >
                    {proiect.descr}
                  </CardProiect>
                );
              })
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProiectePage;

import React, { useEffect } from "react";
import "./parteneri.css";
import useParteneri from "../../api/hooks/axios/parteneri";

import Header from "../../layouts/header";
import banner from "../../assets/photos/parteneri_banner.jpg";

import CardPartener from "../../components/cards/cardPartener";

function ParteneriPage() {
  useEffect(() => window.scrollTo(0, 0), []);
  const data = useParteneri();
  return (
    <div id="parteneri">
      <Header img={banner} top={150}>
        <h1 className="title">Parteneri și sponsori</h1>
      </Header>
      <div className="main">
        <div className="content flex column">
          <div className="grid-container flex">
            {data?.map((e, i) => {
              return (
                <CardPartener key={i} banner={e?.img_path} nume={e?.descr} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParteneriPage;

import React, { useEffect } from "react";
import "./amfiteatreSali.css";

import Header from "../../../layouts/header";
import banner from "../../../assets/photos/aula.jpg";

import SearchBox from "../../../components/searchBox";

import CardAmfiteatru from "../../../components/cards/cardAmfiteatru";

import { useAmfiteatre } from "../../../api/hooks/axios/amfiteatre";
import { useState } from "react";

function AmfiteatreSaliPage() {
  useEffect(() => window.scrollTo(0, 0), []);
  const [src, setSrc] = useState();
  const data = useAmfiteatre(src);
  return (
    <div id="amfiteatre-sali">
      <Header img={banner} top={100} scrollIcon={false}>
        <h2 className="title">Amfiteatre și săli de curs</h2>
        <SearchBox
          placeholder="Caută amfiteatre și săli..."
          textSetter={setSrc}
        />
      </Header>
      <section className="main">
        <div className="content">
          {data?.map ? (
            data?.map((element, index) => (
              <CardAmfiteatru
                key={index}
                img={element?.img_path}
                href={element?.name}
                title={element?.title}
                subtitle={element?.subtitle}
                maps={element?.maps_url}
                model3d={element?.tridim_url}
              />
            ))
          ) : (
            <></>
          )}
        </div>
      </section>
    </div>
  );
}

export default AmfiteatreSaliPage;

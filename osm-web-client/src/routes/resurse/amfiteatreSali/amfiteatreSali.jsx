import React from "react";
import "./amfiteatreSali.css";

import Header from "../../../layouts/header";
import banner from "../../../assets/photos/aula.jpg";

import CardAmfiteatru from "../../../components/cards/cardAmfiteatru";

import { useAmfiteatreSummary } from "../../../api/hooks/axios/amfiteatre";

function AmfiteatreSaliPage() {
  window.scrollTo(0, 0);
  const data = useAmfiteatreSummary();
  return (
    <div id="amfiteatre-sali">
      <Header img={banner} top={100}>
        <h2 className="title">Amfiteatre și săli de curs</h2>
      </Header>
      <section className="main">
        <div className="content">
          {data?.map((element, index) => (
            <CardAmfiteatru
              img={element?.img_path}
              href={element?.id_path}
              title={element?.name}
              subtitle={element?.subname}
              maps={element?.maps_link}
              model3d={element?.["3d_object"]}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default AmfiteatreSaliPage;

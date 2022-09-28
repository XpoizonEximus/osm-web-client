import React from "react";
import "./amfiteatreSali.css";

import { PATH } from "../../../const/const";

import Header from "./header";
import Card3 from "../../../components/cards/card3";

import anatomie from "../../../assets/photos/amfiteatre/anatomie/poza7.jpg";

function AmfiteatreSaliPage() {
  return (
    <div id="amfiteatre-sali">
      <Header />
      <section className="main">
        <div className="content">
          <Card3
            img={anatomie}
            href={PATH.resurse.amfiteatreSali.anatomie.index}
            title="Amfiteatrul Papilian-Albu"
            subtitle="Anatomie Umană"
            maps={PATH.resurse.amfiteatreSali.anatomie.maps}
            model3d={PATH.resurse.amfiteatreSali.anatomie.model3d}
          />
        </div>
      </section>
    </div>
  );
}

export default AmfiteatreSaliPage;

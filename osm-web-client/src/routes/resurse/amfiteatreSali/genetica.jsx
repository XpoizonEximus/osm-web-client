import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot, faCube } from "@fortawesome/free-solid-svg-icons";

import { PATH } from "../../../const/const";

import banner from "../../../assets/photos/amfiteatre/turn genetică/turn genetică.png";
import poza1 from "../../../assets/photos/amfiteatre/turn genetică/poza1.jpg";
import poza2 from "../../../assets/photos/amfiteatre/turn genetică/poza2.jpg";
import poza3 from "../../../assets/photos/amfiteatre/turn genetică/poza3.jpg";

function GeneticaPage() {
  window.scrollTo(0, 0);
  const maps = PATH.resurse.amfiteatreSali.genetica.maps;
  const model3d = PATH.resurse.amfiteatreSali.genetica.model3d;

  return (
    <div id="genetica" className="amfiteatru">
      <header>
        <div className="img-container">
          <img src={banner} alt="maps" />
        </div>
        <div className="container">
          <h3 className="title">Laborator genetică</h3>
          <div className="buttons-container">
            {maps !== "" ? (
              <a href={maps}>
                <FontAwesomeIcon icon={faMapLocationDot} />
                Maps
              </a>
            ) : (
              <></>
            )}
            <div className="stretcher row"></div>
            {model3d !== "" ? (
              <a href={model3d}>
                <FontAwesomeIcon icon={faCube} />
                3D Model
              </a>
            ) : (
              <></>
            )}
          </div>
        </div>
      </header>
      <section className="main">
        <section className="content">
          <h3 className="title">
            Cum ajung la laboratorul de genetică?
          </h3>
          <img src={poza1} alt="poza1" />
          <p>
            Intrați prin intrarea de pe Louis Pasteur 6, unde e bariera și
            bustul lui Woodrow Wilson.
          </p>
          <img src={poza2} alt="poza2" />
          <p>
            După ce ați mers tot în față, faceți stânga înainte de intrarea la
            decanat, unde sunt mai multe mașini și nu mai e asfalt. Acolo e ușa
            de intrare în turn.
          </p>
          <img src={poza3} alt="poza3" />
          <p>
            Împingeți cu putere ușa și veți da de multe scări. Urcați-le pe
            toate până în vârf. Succes!
          </p>
        </section>
      </section>
    </div>
  );
}

export default GeneticaPage;

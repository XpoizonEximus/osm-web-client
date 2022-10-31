import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot, faCube } from "@fortawesome/free-solid-svg-icons";

import { PATH } from "../../../const/const";

import banner from "../../../assets/photos/amfiteatre/cabinet medical Babeș, cantină/cantină și cabinet babeș.png";
import poza1 from "../../../assets/photos/amfiteatre/cabinet medical Babeș, cantină/poza1.jpg";

function CabinetBabesPage() {
  window.scrollTo(0, 0);
  const maps = PATH.resurse.amfiteatreSali.cabinetBabes.maps;
  const model3d = PATH.resurse.amfiteatreSali.cabinetBabes.model3d;

  return (
    <div id="cabinetBabes" className="amfiteatru">
      <header>
        <div className="img-container">
          <img src={banner} alt="maps" />
        </div>
        <div className="container">
          <h3 className="title">Cabinet medical Babeș și cantină</h3>
          <div className="buttons-container">
            {maps !== "" ? (
              <a href={maps}>
                <FontAwesomeIcon icon={faMapLocationDot} />
                Maps
              </a>
            ) : (
              <></>
            )}
            {model3d !== "" && maps !== "" ? <div className="stretcher row"></div> : <></>}
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
            Cum ajung la cabinetul medical de pe Babeș și la cantină?
          </h3>
          <img src={poza1} alt="poza1" />
          <p>
            Cantina se află sub intrarea unde scrie „Restaurant UMF” (săgeata
            galbenă). Pentru cabinet, intrați prin gangul cu sticlă verde
            (săgeata roșie), faceți dreapta și în capăt urcați la etajul 2.
          </p>
        </section>
      </section>
    </div>
  );
}

export default CabinetBabesPage;

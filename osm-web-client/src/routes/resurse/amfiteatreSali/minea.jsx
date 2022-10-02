import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot, faCube } from "@fortawesome/free-solid-svg-icons";

import { PATH } from "../../../const/const";

import banner from "../../../assets/photos/amfiteatre/amf. Minea/minea.png";
import poza1 from "../../../assets/photos/amfiteatre/amf. Minea/1.jpg";
import poza2 from "../../../assets/photos/amfiteatre/amf. Minea/2.jpg";
import poza3 from "../../../assets/photos/amfiteatre/amf. Minea/3.jpg";
import movie from "../../../assets/photos/amfiteatre/amf. Minea/minea.mp4";

function MineaPage() {
  window.scrollTo(0, 0);
  const maps = PATH.resurse.amfiteatreSali.minea.maps;
  const model3d = PATH.resurse.amfiteatreSali.minea.model3d;

  return (
    <div id="minea" className="amfiteatru">
      <header>
        <div className="img-container">
          <img src={banner} alt="maps" />
        </div>
        <div className="container">
          <h3 className="title">Amfiteatrul Ion Minea - Neurologie</h3>
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
            Cum ajung la Amfiteatrul Ion Minea - Neurologie?
          </h3>
          <video controls>
            <source src={movie} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p>
            Amfiteatrul Minea se află în clinica de neurologie la intersecția
            dintre strada Louis Pasteur și Ion Creangă.
          </p>
          <img src={poza1} alt="poza1" />
          <p>Intrați pe poarta din imagine.</p>
          <img src={poza2} alt="poza2" />
          <p>
            Intrați prin intrarea din spate a clinicii, după care urcați la
            etajul 1.
          </p>
          <img src={poza3} alt="poza3" />
          <p>Amfiteatrul Ion Minea se află drept în fața voastră.</p>
        </section>
      </section>
    </div>
  );
}

export default MineaPage;

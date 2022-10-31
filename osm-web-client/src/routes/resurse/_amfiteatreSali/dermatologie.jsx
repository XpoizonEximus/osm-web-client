import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot, faCube } from "@fortawesome/free-solid-svg-icons";

import { PATH } from "../../../const/const";

import banner from "../../../assets/photos/amfiteatre/amf. Dermatologie/derma.png";
import poza1 from "../../../assets/photos/amfiteatre/amf. Dermatologie/Poza 1.jpg";
import poza2 from "../../../assets/photos/amfiteatre/amf. Dermatologie/Poza 2.jpg";
import poza3 from "../../../assets/photos/amfiteatre/amf. Dermatologie/Poza 3.jpg";
import poza4 from "../../../assets/photos/amfiteatre/amf. Dermatologie/Poza 4.jpg";
import movie from "../../../assets/photos/amfiteatre/amf. Dermatologie/Time-lapse.mp4";

function DermatologiePage() {
  window.scrollTo(0, 0);
  const maps = PATH.resurse.amfiteatreSali.dermatologie.maps;
  const model3d = PATH.resurse.amfiteatreSali.dermatologie.model3d;

  return (
    <div id="dermatologie" className="amfiteatru">
      <header>
        <div className="img-container">
          <img src={banner} alt="maps" />
        </div>
        <div className="container">
          <h3 className="title">Amfiteatrul Dermatologie</h3>
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
            Cum ajung la amfiteatrul de dermatologie?
          </h3>
          <video controls>
            <source src={movie} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <img src={poza1} alt="poza1" />
          <p>De pe Babeș intrați pe strada care duce la Anatomie.</p>
          <img src={poza2} alt="poza2" />
          <p>
            Mergeți tot înainte până la a treia curte interioară între clădiri
            pe stânga (singura cu spațiu verde pe mijloc).
          </p>
          <img src={poza3} alt="poza3" />
          <p>
            Mergeți pe trotuarul de pe partea stângă (mai apropiat de clinica de
            oftalmologie).
          </p>
          <img src={poza4} alt="poza4" />
          <p>Amfiteatrul e la capătul acestui trotuar.</p>
        </section>
      </section>
    </div>
  );
}

export default DermatologiePage;

import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot, faCube } from "@fortawesome/free-solid-svg-icons";

import { PATH } from "../../../const/const";

import banner from "../../../assets/photos/amfiteatre/sala Multimedia/multimedia.png";
import poza1 from "../../../assets/photos/amfiteatre/sala Multimedia/poza1.jpg";
import poza2 from "../../../assets/photos/amfiteatre/sala Multimedia/poza2.jpg";
import poza3 from "../../../assets/photos/amfiteatre/sala Multimedia/poza3.jpg";

function MultimediaPage() {
  window.scrollTo(0, 0);
  const maps = PATH.resurse.amfiteatreSali.multimedia.maps;
  const model3d = PATH.resurse.amfiteatreSali.multimedia.model3d;

  return (
    <div id="multimedia" className="amfiteatru">
      <header>
        <div className="img-container">
          <img src={banner} alt="maps" />
        </div>
        <div className="container">
          <h3 className="title">Sala Multimedia</h3>
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
            Cum ajung la sala Multimedia?
          </h3>
          <img src={poza1} alt="poza1" />
          <p>
            Intrați în rectorat de pe intrarea principală de pe Victor Babeș 8.
          </p>
          <img src={poza2} alt="poza2" />
          <p>După ce intrați, faceți dreapta.</p>
          <img src={poza3} alt="poza3" />
          <p>Sala Multimedia apare imediat pe dreapta, la câțiva metri.</p>
        </section>
      </section>
    </div>
  );
}

export default MultimediaPage;

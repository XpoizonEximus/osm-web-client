import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot, faCube } from "@fortawesome/free-solid-svg-icons";

import { PATH } from "../../../const/const";

import banner from "../../../assets/photos/amfiteatre/amf. Ginecologie/gine1.png";
import poza1 from "../../../assets/photos/amfiteatre/amf. Ginecologie/poza1.jpg";
import poza2 from "../../../assets/photos/amfiteatre/amf. Ginecologie/poza2.jpg";
import poza3 from "../../../assets/photos/amfiteatre/amf. Ginecologie/poza3.jpg";
import poza4 from "../../../assets/photos/amfiteatre/amf. Ginecologie/poza4.jpg";
import poza5 from "../../../assets/photos/amfiteatre/amf. Ginecologie/poza5.jpg";
import poza6 from "../../../assets/photos/amfiteatre/amf. Ginecologie/poza6.jpg";
import poza7 from "../../../assets/photos/amfiteatre/amf. Ginecologie/poza7.jpg";
import movie from "../../../assets/photos/amfiteatre/amf. Ginecologie/video1.mp4";

function Ginecologie1Page() {
  window.scrollTo(0, 0);
  const maps = PATH.resurse.amfiteatreSali.gine1.maps;
  const model3d = PATH.resurse.amfiteatreSali.gine1.model3d;

  return (
    <div id="gine1" className="amfiteatru">
      <header>
        <div className="img-container">
          <img src={banner} alt="maps" />
        </div>
        <div className="container">
          <h3 className="title">Amfiteatrul Ginecologie I</h3>
          <div className="buttons-container">
            {maps !== "" ? (
              <a href={maps}>
                <FontAwesomeIcon icon={faMapLocationDot} />
                Maps
              </a>
            ) : (
              <></>
            )}
            {model3d !== "" && maps !== "" ? (
              <div className="stretcher row"></div>
            ) : (
              <></>
            )}
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
          <h3 className="title">Cum ajung la amfiteatrul de ginecologie I?</h3>
          <video controls>
            <source src={movie} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <img src={poza1} alt="poza1" />
          <p>
            Intrați pe această stradă, dinspre Babeș, în incinta complexului
            Spitalului Județean de Urgență Cluj.
          </p>
          <img src={poza2} alt="poza2" />
          <p>O luați la dreapta, în jos.</p>
          <img src={poza3} alt="poza3" />
          <p>După ce ați coborât, mergeți înainte până la capătul străzii.</p>
          <img src={poza4} alt="poza4" />
          <p>În capăt, faceți dreapta.</p>
          <img src={poza5} alt="poza5" />
          <p>
            Dupa ce ați intrat în clădire, va trebui să mergeți în partea
            dreapta; urcați scările.
          </p>
          <img src={poza6} alt="poza6" />
          <p>Dupa ce ați urcat scările, o veți lua la dreapta.</p>
          <img src={poza7} alt="poza7" />
          <p>
            Mergeți înainte, iar la finalul coridorului, o veți lua la stânga.
            Mergeți înainte și veți vedea amfiteatrul în capăt.
          </p>
        </section>
      </section>
    </div>
  );
}

export default Ginecologie1Page;

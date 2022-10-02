import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot, faCube } from "@fortawesome/free-solid-svg-icons";

import { PATH } from "../../../const/const";

import banner from "../../../assets/photos/amfiteatre/amf. Anatomie/anato.png";
import poza1 from "../../../assets/photos/amfiteatre/amf. Anatomie/poza1.jpg";
import poza2 from "../../../assets/photos/amfiteatre/amf. Anatomie/poza2.jpg";
import poza3 from "../../../assets/photos/amfiteatre/amf. Anatomie/poza3.jpg";
import poza4 from "../../../assets/photos/amfiteatre/amf. Anatomie/poza4.jpg";
import poza5 from "../../../assets/photos/amfiteatre/amf. Anatomie/poza5.jpg";
import poza6 from "../../../assets/photos/amfiteatre/amf. Anatomie/poza6.jpg";
import poza7 from "../../../assets/photos/amfiteatre/amf. Anatomie/poza7.jpg";
import movie from "../../../assets/photos/amfiteatre/amf. Anatomie/anato.mp4";

function AnatomiePage() {
  window.scrollTo(0, 0);
  const maps = PATH.resurse.amfiteatreSali.anatomie.maps;
  const model3d = PATH.resurse.amfiteatreSali.anatomie.model3d;

  return (
    <div id="anatomie" className="amfiteatru">
      <header>
        <div className="img-container">
          <img src={banner} alt="maps" />
        </div>
        <div className="container">
          <h3 className="title">Amfiteatrul Papilian-Albu - Anatomie Umană</h3>
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
            Cum ajung la amfiteatrul Papilian-Albu - Anatomie Umană?
          </h3>
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
          <p>Mergeți tot în față până la capătul străzii.</p>
          <img src={poza3} alt="poza3" />
          <p>
            În capăt, pe stânga este clădirea cu Anatomia Umană (și cea
            Patologică și Legală, de altfel).
          </p>
          <img src={poza4} alt="poza4" />
          <p>
            Pentru LP-uri, veți merge în dreapta sau în sala dintre etaje, dar
            pentru amfiteatru urmați săgeata și urcați la etaj.
          </p>
          <img src={poza5} alt="poza5" />
          <p>Când ajungeți la etaj, faceți stânga.</p>
          <img src={poza6} alt="poza6" />
          <p>
            La etaj, cum am spus, faceți stânga și la capătul holului va trebui
            să faceți iar stânga.
          </p>
          <img src={poza7} alt="poza7" />
          <p>
            După acea a doua stânga, veți vedea amfiteatrul în capăt. Nu este
            mare, arată mai degrabă ca o sală uzuală de curs.
          </p>
        </section>
      </section>
    </div>
  );
}

export default AnatomiePage;

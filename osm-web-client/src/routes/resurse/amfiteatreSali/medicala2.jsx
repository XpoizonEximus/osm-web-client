import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot, faCube } from "@fortawesome/free-solid-svg-icons";

import { PATH } from "../../../const/const";

import banner from "../../../assets/photos/amfiteatre/amf. Medicala 2/med 2.png";
import poza1 from "../../../assets/photos/amfiteatre/amf. Medicala 2/med2.1.jpeg";
import poza2 from "../../../assets/photos/amfiteatre/amf. Medicala 2/med2.2.jpeg";
import poza3 from "../../../assets/photos/amfiteatre/amf. Medicala 2/med2.3.jpeg";
import poza4 from "../../../assets/photos/amfiteatre/amf. Medicala 2/med2.4.jpeg";
import poza5 from "../../../assets/photos/amfiteatre/amf. Medicala 2/med2.5.jpeg";
import poza6 from "../../../assets/photos/amfiteatre/amf. Medicala 2/med2.6.jpeg";
import movie from "../../../assets/photos/amfiteatre/amf. Medicala 2/time-lapse med 2.mp4";

function Medicala2Page() {
  window.scrollTo(0, 0);
  const maps = PATH.resurse.amfiteatreSali.medicala2.maps;
  const model3d = PATH.resurse.amfiteatreSali.medicala2.model3d;

  return (
    <div id="medicala-2" className="amfiteatru">
      <header>
        <div className="img-container">
          <img src={banner} alt="maps" />
        </div>
        <div className="container">
          <h3 className="title">Amfiteatrul Ioan Goia - Medicală II</h3>
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
            Cum ajung la amfiteatrul Ioan Goia - Medicală II?
          </h3>
          <video controls>
            <source src={movie} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <img src={poza1} alt="poza1" />
          <p>Intrarea în spital se face de pe strada Clinicilor.</p>
          <img src={poza2} alt="poza2" />
          <p>
            Holul intrării, ușa se deschide cu cartela personalului medical a
            spitalului/ portar. Mai departe trebuie mers în față, pe ușa din
            dreapta liftului.
          </p>
          <img src={poza3} alt="poza3" />
          <p>Ajungând în curtea spitalului, păstrați aleea.</p>
          <img src={poza4} alt="poza4" />
          <p>
            La finalul aleei se observă ușa de intrare spre scările ce duc la
            amfiteatru.
          </p>
          <img src={poza5} alt="poza5" />
          <p>Scările ce duc la amfiteatru.</p>
          <img src={poza6} alt="poza6" />
          <p>La etajul 1 este amfiteatrul.</p>
        </section>
      </section>
    </div>
  );
}

export default Medicala2Page;

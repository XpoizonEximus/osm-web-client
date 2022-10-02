import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot, faCube } from "@fortawesome/free-solid-svg-icons";

import { PATH } from "../../../const/const";

import banner from "../../../assets/photos/amfiteatre/amf. Radiologie/radio.png";
import poza2 from "../../../assets/photos/amfiteatre/amf. Radiologie/poza 2.jpg";
import poza3 from "../../../assets/photos/amfiteatre/amf. Radiologie/poza 3.jpg";
import poza4 from "../../../assets/photos/amfiteatre/amf. Radiologie/poza 4.jpg";
import poza5 from "../../../assets/photos/amfiteatre/amf. Radiologie/poza 5.jpg";

function RadiologiePage() {
  window.scrollTo(0, 0);
  const maps = PATH.resurse.amfiteatreSali.radiologie.maps;
  const model3d = PATH.resurse.amfiteatreSali.radiologie.model3d;

  return (
    <div id="radiologie" className="amfiteatru">
      <header>
        <div className="img-container">
          <img src={banner} alt="maps" />
        </div>
        <div className="container">
          <h3 className="title">Amfiteatrul Dimitrie Negru - Radiologie</h3>
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
            Cum ajung la amfiteatrul Dimitrie Negru - Radiologie?
          </h3>
          <p>
            Amfiteatrul Dimitrie Negru îl veți găsi sub denumirea de Amfiteatrul
            de Radiologie. Vedere de ansamblu, intrare dinspre strada Victor
            Babeș, în incinta complexului Spitalului Județean de Urgență Cluj.
          </p>
          <img src={poza2} alt="poza2" />
          <p>
            Intrați pe aceasta stradă, dinspre Strada Victor Babeș,în incinta
            Complexului Spitalului Județean de Urgență Cluj.
          </p>
          <img src={poza3} alt="poza3" />
          <p>
            Mergeți tot în față până treceți de bariera și de Clădirea
            Fiziopatologie (pe partea dreaptă).
          </p>
          <img src={poza4} alt="poza4" />
          <p>
            La capătul Clădirii Fiziopatologie sunt niște scări pe partea
            dreaptă. Coborâți scările, traversați strada pe la trecerea de
            pietoni. Amfiteatrul este in clădirea de pe partea dreaptă, între
            Clinica de Chirurgie I și Clădirea Disciplinei de Fiziologie.
          </p>
          <img src={poza5} alt="poza5" />
          <p>
            Pentru accesul în Amfiteatrul de Radiologie urcați scările și după
            ce intrați în clădire, sala este prima pe partea dreaptă.
          </p>
        </section>
      </section>
    </div>
  );
}

export default RadiologiePage;

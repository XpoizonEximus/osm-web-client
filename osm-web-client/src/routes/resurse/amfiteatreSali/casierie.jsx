import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot, faCube } from "@fortawesome/free-solid-svg-icons";

import { PATH } from "../../../const/const";

import banner from "../../../assets/photos/amfiteatre/casierie, birou taxe/casierie.png";
import poza1 from "../../../assets/photos/amfiteatre/casierie, birou taxe/poza1.jpg";
import poza2 from "../../../assets/photos/amfiteatre/casierie, birou taxe/poza2.jpg";
import poza3 from "../../../assets/photos/amfiteatre/casierie, birou taxe/poza3.jpg";
import poza4 from "../../../assets/photos/amfiteatre/casierie, birou taxe/poza4.jpg";

function CasieriePage() {
  window.scrollTo(0, 0);
  const maps = PATH.resurse.amfiteatreSali.casierie.maps;
  const model3d = PATH.resurse.amfiteatreSali.casierie.model3d;

  return (
    <div id="casierie" className="amfiteatru">
      <header>
        <div className="img-container">
          <img src={banner} alt="maps" />
        </div>
        <div className="container">
          <h3 className="title">Casierie și birou taxe</h3>
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
            Cum ajung la casierie și la biroul de taxe?
          </h3>
          <img src={poza1} alt="poza1" />
          <p>
            Intrați prin intrarea de pe Louis Pasteur 6, unde e bariera și
            bustul lui Woodrow Wilson și mergetți în față.
          </p>
          <img src={poza2} alt="poza2" />
          <p>
            Mergeți tot în față până ajungeți la intrarea în decanat, care e pe
            pe partea dreaptă, cu câteva trepte. Intrați pe ușă.
          </p>
          <img src={poza3} alt="poza3" />
          <p>
            Faceți stânga ca să ajungeți în vestibulul cu registratura și apoi
            faceți stânga din nou pe holul din fața voastră.
          </p>
          <img src={poza4} alt="poza4" />
          <p>
            În capătul holului este casieria pe dreapta (săgeată albastră) și
            biroul de taxe pe stânga (săgeată galbenă). În mod normal, prima
            oară mergeți la biroul de taxe pentru devizul de plată și apoi la
            casierie ca să plătiți efectiv și să vă luați dovada plății.
          </p>
        </section>
      </section>
    </div>
  );
}

export default CasieriePage;

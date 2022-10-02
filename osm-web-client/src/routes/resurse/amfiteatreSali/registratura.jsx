import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot, faCube } from "@fortawesome/free-solid-svg-icons";

import { PATH } from "../../../const/const";

import banner from "../../../assets/photos/amfiteatre/registratură/registr, contab, taxe.png";
import poza1 from "../../../assets/photos/amfiteatre/registratură/poza1.jpg";
import poza2 from "../../../assets/photos/amfiteatre/registratură/poza2.jpg";
import poza3 from "../../../assets/photos/amfiteatre/registratură/poza3.jpg";

function RegistraturaPage() {
  window.scrollTo(0, 0);
  const maps = PATH.resurse.amfiteatreSali.registratura.maps;
  const model3d = PATH.resurse.amfiteatreSali.registratura.model3d;

  return (
    <div id="registratura" className="amfiteatru">
      <header>
        <div className="img-container">
          <img src={banner} alt="maps" />
        </div>
        <div className="container">
          <h3 className="title">Registratură</h3>
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
            Cum ajung la registratură?
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
          <p>Imediat pe stânga e registratura.</p>
        </section>
      </section>
    </div>
  );
}

export default RegistraturaPage;

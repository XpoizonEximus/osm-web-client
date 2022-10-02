import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot, faCube } from "@fortawesome/free-solid-svg-icons";

import { PATH } from "../../../const/const";

import banner from "../../../assets/photos/amfiteatre/amf. Infecțioase/infec.png";
import poza2 from "../../../assets/photos/amfiteatre/amf. Infecțioase/poza 2.jpg";
import poza3 from "../../../assets/photos/amfiteatre/amf. Infecțioase/poza 3.jpg";

function InfectioasePage() {
  window.scrollTo(0, 0);
  const maps = PATH.resurse.amfiteatreSali.infectioase.maps;
  const model3d = PATH.resurse.amfiteatreSali.infectioase.model3d;

  return (
    <div id="infectioase" className="amfiteatru">
      <header>
        <div className="img-container">
          <img src={banner} alt="maps" />
        </div>
        <div className="container">
          <h3 className="title">Amfiteatrul Boli Infecțioase</h3>
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
            Cum ajung la amfiteatrul de boli infecțioase?
          </h3>
          <img src={poza2} alt="poza2" />
          <p>
            Intrați pe strada Iuliu Moldovan, dinstre strada Louis Pasteur.
            Spitalul de Boli Infecțioase Cluj-Napoca se va afla pe partea
            dreaptă, la nr. 23.
          </p>
          <img src={poza3} alt="poza3" />
          <p>
            Intrați în Spitalul de Boli Infecțioase la parter, faceți dreapta și
            continuați pe holul din partea dreaptă până veți vedea intrarea în
            Amfiteatru pe partea stângă.
          </p>
        </section>
      </section>
    </div>
  );
}

export default InfectioasePage;
